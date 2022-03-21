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
            type: 'email',
            name: 'email',
            placeholder: 'Email Address',
            required: 'required',
        }
    ];
})();