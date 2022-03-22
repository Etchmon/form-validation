const Display = (() => {
    const dom = document.querySelector('.content');
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const btn = document.createElement('button');
    const container = document.createElement('section');
    const image = document.createElement('img');
    const legend = document.createElement('legend');

    legend.innerHTML = "Registration Form";
    form.appendChild(legend)

    Object.assign(image, {
        src: './ball-image.jpg',
        alt: 'ball image'
    })

    const inputs = [
        {
            type: 'email',
            name: 'email',
            placeholder: 'Email Address',
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$',
            required: 'required',
            minLength: '5',
            maxLength: '30'
        },
        {
            type: 'select',
            name: 'country',
            placeholder: 'Country',
            required: 'required',
        },
        {
            type: 'text',
            name: 'zipCode',
            placeholder: 'Zip Code',
            pattern: '[0-9]+',
            required: 'required',
            minLength: '5',
            maxLength: '5'
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            required: 'required',
            minLength: '8',
            maxLength: '20'
        },
        {
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'Password',
            required: 'required',
            minLength: '8',
            maxLength: '20'
        }
    ];

    inputs.forEach(data => {
        const inputBox = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const errMsg = document.createElement('span');

        label.innerHTML = data.placeholder;
        errMsg.className = 'error';
        Object.assign(input, data);

        input.addEventListener('input', function (event) {
            if (input.validity.valid) {
                errMsg.innerHTML = '';
                errMsg.className = 'error'
            } else {
                showError(input, errMsg);
            }
        })

        inputBox.appendChild(label);
        inputBox.appendChild(input);
        inputBox.appendChild(errMsg);

        form.appendChild(inputBox);
    });

    const showError = (data, errMsg) => {
        console.log(data.validity);
        if (data.validity.valueMissing) {
            errMsg.innerHTML = `Please enter a valid ${data.placeholder}`;
        } else if (data.validity.typeMismatch || data.validity.patternMismatch) {
            errMsg.innerHTML = `Entered value needs to be a ${data.placeholder}`;
        } else if (data.validity.tooShort) {
            errMsg.innerHTML = `Entered value needs to be at least ${data.minLength}`;
        } else if (data.validity.tooLong) {
            errMsg.innerHTML = `Entered value needs to be under ${data.maxLength}`;
        };

        errMsg.className = 'error active';
    }

    const initiateDom = (() => {
        Object.assign(btn, {
            type: 'Submit',
            innerHTML: 'Submit'
        });

        formContainer.appendChild(form);
        form.appendChild(btn);
        container.appendChild(image);
        container.appendChild(formContainer);
        dom.appendChild(container);
    })();

})();