const Display = (() => {
    const dom = document.querySelector('.content');
    const container = document.createElement('div');
    const form = document.createElement('form');
    const btn = document.createElement('button');

    const inputs = [
        {
            type: 'email',
            name: 'email',
            placeholder: 'Email Address',
            required: 'required',
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
            pattern: "[0-9]{5}",
            required: 'required',
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            required: 'required',
        },
        {
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'Password',
            required: 'required',
        }
    ];

    inputs.forEach(data => {
        const container = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.innerHTML = data.placeholder;

        Object.assign(input, data);

        container.appendChild(label);
        container.appendChild(input);

        form.appendChild(container);
    });

    const initiateDom = (() => {
        Object.assign(btn, {
            type: 'Submit',
            innerHTML: 'Submit'
        })

        container.appendChild(form);
        container.appendChild(btn);
        dom.appendChild(container);
    })();

})();