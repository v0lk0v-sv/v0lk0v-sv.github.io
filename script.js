<script>
// Объявляем функцию на уровне скрипта для глобального доступа
function updateVisibilityOfDiv(form) {
  // Передаем форму в функцию и ищем div в контексте этой формы
  const div = form.querySelector('[ms-code-file-upload-input="fileToUpload"]');
  if (div) {
    div.style.display = form.selectedFiles.length > 0 ? 'block' : 'none';
  }
}

const forms = document.querySelectorAll('form[ms-code-file-upload="form"]');
let currentDeleteIndex = -1;

forms.forEach((form) => {
  form.setAttribute('enctype', 'multipart/form-data');
  form.selectedFiles = []; // Используем selectedFiles как свойство формы
  const uploadInputs = form.querySelectorAll('[ms-code-file-upload-input]');

  uploadInputs.forEach((uploadInput) => {
    const inputName = uploadInput.getAttribute('ms-code-file-upload-input');
    const previewsContainer = document.createElement('div');
    previewsContainer.classList.add('previews-container');
    const button = document.getElementById('uploadButton');

    const updateButtonStatus = () => {
      button.classList.toggle('photo-btn-gh-disabled', form.selectedFiles.length >= 4);
      const maxAmountPhotoNotification = document.getElementById('maxAmountPhotoNotification');
      if (maxAmountPhotoNotification) {
        maxAmountPhotoNotification.classList.toggle('visible', form.selectedFiles.length >= 4);
      }
    };

    const updatePreviews = () => {
      previewsContainer.innerHTML = '';
      form.selectedFiles.forEach((file, index) => {
        const previewWrapper = document.createElement('div');
        previewWrapper.classList.add('preview-wrapper');
        const preview = document.createElement('img');
        const removeButton = document.createElement('div');
        removeButton.classList.add('close-icon-wrapper');

        removeButton.addEventListener('click', (event) => {
          event.stopPropagation();
          form.selectedFiles.splice(index, 1);
          updatePreviews();
        });

        previewWrapper.addEventListener('click', () => {
          openSheet(() => {
            form.selectedFiles.splice(index, 1);
            updatePreviews();
          }, index);
        });

        const reader = new FileReader();
        reader.onload = (e) => {
          preview.src = e.target.result;
        };
        reader.readAsDataURL(file);

        previewWrapper.appendChild(preview);
        previewWrapper.appendChild(removeButton);
        previewsContainer.appendChild(previewWrapper);
      });
      updateButtonStatus();
      updateVisibilityOfDiv(form); // Обновляем видимость div
    };

    if (button) {
      let fileInput = form.querySelector('input[type="file"]');
      if (!fileInput) {
        fileInput = document.createElement('input');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('name', inputName + '[]');
        fileInput.setAttribute('accept', 'image/*');
        fileInput.setAttribute('multiple', '');
        fileInput.style.display = 'none';
        form.appendChild(fileInput);
      }

      button.addEventListener('click', (event) => {
        event.preventDefault();
        fileInput.value = '';
        fileInput.click();
      });

      fileInput.addEventListener('change', () => {
        if (form.selectedFiles.length + fileInput.files.length > 4) {
          alert('Maximum of 4 photos.');
        } else {
          Array.from(fileInput.files).forEach((file) => {
            form.selectedFiles.push(file); // Добавляем файлы в массив
          });
          updatePreviews();
        }
      });
    }

    uploadInput.appendChild(previewsContainer);
  });
});

function openSheet(deleteCallback, index) {
  currentDeleteIndex = index;
  document.querySelector('.btnDelete').onclick = function() {
    deleteCallback();
    closeSheet();
  };
  $('.gfg-action ').show();
  document.body.classList.add('body-no-scroll');
  const form = forms[currentDeleteIndex]; // Получаем текущую форму по индексу
  if (form) {
    updateVisibilityOfDiv(form); // Обновляем видимость div для текущей формы
  }
}

function closeSheet() {
  $('.gfg-action ').hide();
  document.body.classList.remove('body-no-scroll');
  if (currentDeleteIndex !== -1) {
    const form = forms[currentDeleteIndex];
    updateVisibilityOfDiv(form); // Также обновляем видимость div при закрытии
  }
}

document.querySelector('.gfg-action.action-sheet-mask.extraMask').addEventListener('click', closeSheet);

var header = document.getElementById('toolbar');
window.onscroll = function() {
  if (window.pageYOffset > 0) {
    if (!header.classList.contains('scrolled')) {
      header.classList.add('scrolled');
      // Задержка для начала анимации
      setTimeout(function() {
        header.classList.add('visible');
      }, 10); // Небольшая задержка перед началом анимации
    }
  } else {
    header.classList.remove('visible');
    // Удалить класс 'scrolled' после исчезновения границы
    setTimeout(function() {
      header.classList.remove('scrolled');
    }, 100); // Задержка должна соответствовать длительности анимации
  }
};

let fixPosition = 0; // the fix
let lastScrollY = window.pageYOffset; // the last scroll position
let toolbarWrap = document.getElementById('toolbar-wrap'); // the toolbar wrap
let toolbar = document.getElementById('toolbar'); // the toolbar
let editor = document.getElementById('message'); // the editor

// function to set the margin to show the toolbar if hidden
const setMargin = function() {
  // if toolbar wrap is hidden
  const newPosition = toolbarWrap.getBoundingClientRect().top;
  if (newPosition < -1) {
    // add a margin to show the toolbar
    toolbar.classList.add("down"); // add class so toolbar can be animated
    fixPosition = Math.abs(newPosition); // this is new position we need to fix the toolbar in the display
    // if at the bottom of the page take a couple of pixels off due to gap
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      fixPosition -= 2;
    }
    // set the margin to the new fixed position
    toolbar.style["margin-top"] = fixPosition + "px";
  }
}

// use lodash debounce to stop flicker
const debounceMargin = _.debounce(setMargin, 150);

// function to run on scroll and blur
const showToolbar = function() {
  // remove animation and put toolbar back in default position
  if (fixPosition > 0) {
    toolbar.classList.remove("down");
    fixPosition = 0;
    toolbar.style["margin-top"] = 0 + "px";
  }
  // will check if toolbar needs to be fixed
  debounceMargin();
}

// add an event listener to scroll to check if
// toolbar position has moved off the page
window.addEventListener("scroll", showToolbar);
// add an event listener to blur as iOS keyboard may have closed
// and toolbar postition needs to be checked again
editor.addEventListener("blur", showToolbar);
</script>