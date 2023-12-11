function toggleForm(formId) {
    document.getElementById('login').style.display = formId === 'login' ? 'block' : 'none';
    document.getElementById('signup').style.display = formId === 'signup' ? 'block' : 'none';
}

// Check the URL hash on page load and show/hide the corresponding form
window.onload = function () {
    var hash = window.location.hash;
    if (hash === '#signup') {
        toggleForm('signup');
    } else {
        toggleForm('login');
    }
};

const password = document.querySelectorAll('.password');

for (let i = 0; i < password.length; i++) {
    let l = password[i].querySelector('.fa');
    let val = password[i].querySelector('input');
    l.addEventListener('click', () => {
        if (l.classList.contains('fa-eye')) {
            l.classList.remove('fa-eye');
            l.classList.add('fa-eye-slash');
            val.type = 'text';
        } else if (l.classList.contains('fa-eye-slash')) {
            l.classList.remove('fa-eye-slash');
            l.classList.add('fa-eye');
            val.type = 'password';
        }
    });
    val.addEventListener('input', () => {
        if (val.value != '') {
            l.classList.remove('fa-lock');
            l.classList.add('fa-eye');
        } else {
            l.classList.remove('fa-eye');
            l.classList.add('fa-lock');
        }
    })
}


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Your custom submission logic here
    const formData = new FormData(this);

    // Log the form values
    // console.log(formData.get('password'));
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    console.log('Custom login submission');
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Your custom submission logic here
    const formData = new FormData(this);

    // Log the form values
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    console.log('Custom signup submission');
});