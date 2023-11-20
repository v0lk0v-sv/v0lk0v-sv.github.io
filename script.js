<script>
function updateVisibilityOfDiv(form) {
  const div = form.querySelector('[ms-code-file-upload-input="fileToUpload"]');
  if (div) {
    div.style.display = form.selectedFiles.length > 0 ? 'block' : 'none';
  }
}

const forms = document.querySelectorAll('form[ms-code-file-upload="form"]');
let currentDeleteIndex = -1;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

forms.forEach((form) => {
  form.setAttribute('enctype', 'multipart/form-data');
  form.selectedFiles = []; 
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
      updateVisibilityOfDiv(form); 
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
            form.selectedFiles.push(file); 
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
  //$('.gfg-action ').show();
	document.getElementById('action-sheet').classList.add('action-sheet-visible');
	document.getElementById('mask').classList.add('mask-visible');
  document.body.classList.add('body-no-scroll');
  const form = forms[currentDeleteIndex]; 
  if (form) {
    updateVisibilityOfDiv(form); 
  }
}

function closeSheet() {
  //$('.gfg-action ').hide();
	document.getElementById('action-sheet').classList.remove('action-sheet-visible');
	document.getElementById('mask').classList.remove('mask-visible');
  document.body.classList.remove('body-no-scroll');
  if (currentDeleteIndex !== -1) {
    const form = forms[currentDeleteIndex];
    updateVisibilityOfDiv(form);
  }
}

document.querySelector('.gfg-action.action-sheet-mask.extraMask').addEventListener('click', closeSheet);

window.addEventListener('scroll', function() {
  var header = document.querySelector('.h-main-nav-wrap');
  if (window.pageYOffset > 1) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
</script>
<script>
document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('email-form');
  if (form) {
    form.setAttribute('novalidate', '');
  }
});

  const form = document.getElementById('email-form');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitButton = document.getElementById('form-button');
  const emailErrorElement = document.getElementById('emailError'); 
  const messageErrorElement = document.getElementById('messageError');

  function checkInputs() {
    let isValid = form.checkValidity();
    submitButton.disabled = !isValid;
    submitButton.classList.toggle('btn-gh-active', isValid);
	}

	function validateEmail() {
    if (emailInput.value.trim() === '') {
    	emailErrorElement.textContent = 'This field is required';
    	//emailErrorElement.style.display = 'block';
			emailErrorElement.classList.add('visible');
    	emailInput.classList.add('input-not-valid');
  	}
    else if (!emailRegex.test(emailInput.value)) { 
    	emailErrorElement.textContent = 'Enter a valid email address';
    	//emailErrorElement.style.display = 'block';
			emailErrorElement.classList.add('visible');
    	emailInput.classList.add('input-not-valid');
  	} else {
    	//emailErrorElement.style.display = 'none';
			emailErrorElement.classList.remove('visible');
    	emailInput.classList.remove('input-not-valid');
  	}
    checkInputs();
	}

  messageInput.addEventListener('input', checkInputs);
  //emailInput.addEventListener('input', checkInputs);
	emailInput.addEventListener('blur', validateEmail);
	//emailInput.addEventListener('input', function() {
  	//if (emailInput.validity.valid) {
    	//emailErrorElement.classList.remove('visible');
    	//emailInput.classList.remove('input-not-valid');
  	//} else {
    	//if (emailInput.value.trim() === '') {
      	//emailErrorElement.textContent = 'This field is required';
      //} else {
      	//emailErrorElement.textContent = 'Enter a valid email address';
      //}
      //emailErrorElement.classList.add('visible');
			//emailInput.classList.add('input-not-valid');
		//}
    //checkInputs();
	//});
 emailInput.addEventListener('input', function() {
  if (emailRegex.test(emailInput.value) && emailErrorElement.classList.contains('visible')) {
    emailErrorElement.classList.remove('visible');
    emailInput.classList.remove('input-not-valid');
    emailErrorElement.textContent = '';
  }
  checkInputs();
});
  messageInput.addEventListener('blur', function() {
  	if (messageInput.value.trim() === '') {
    	messageErrorElement.classList.add('visible');
      messageInput.classList.add('input-not-valid');
  	} else {
    	messageErrorElement.classList.remove('visible');
      messageInput.classList.remove('input-not-valid');
  	}
	});

messageInput.addEventListener('input', function() {
  if (messageInput.value.trim() !== '' && messageErrorElement.classList.contains('visible')) {
    messageErrorElement.classList.remove('visible');
    messageInput.classList.remove('input-not-valid');
    //messageErrorElement.textContent = ''; 
  }
  checkInputs();
});

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    checkInputs(); 
  }
});
</script>