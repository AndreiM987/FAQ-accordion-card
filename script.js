
    const question = document.querySelectorAll('.question');
    console.log(question)
    console.log(question[0].nextElementSibling)
    console.log(question[0].nextElementSibling.style.display);
    console.log(question[0].nextElementSibling.style.display);

    question.forEach(element => {
        element.addEventListener('mouseover', (e) => {
            e.target.style.cursor = 'pointer';
            e.target.style.color = ' hsl(14, 88%, 65%)';
        })
        element.addEventListener('mouseout', (e) => {
            if(e.target.nextElementSibling.style.display === 'none') {
                e.target.style.color = ' hsl(240, 6%, 50%)';
            }
            else {
                e.target.style.color = 'hsl(238, 29%, 16%)';
            }

        })
        element.addEventListener('click', (e) => {
            if(e.target.nextElementSibling.style.display ==='none') {
                e.target.style.color = 'hsl(238, 29%, 16%)';
                e.target.nextElementSibling.style.display = 'block';
                e.target.lastChild.style.transform = 'rotate(180deg)';
            }
             else {
                e.target.style.color = 'hsl(240, 6%, 50%';
                e.target.nextElementSibling.style.display = 'none';
                e.target.lastChild.style.transform = 'none';
             }
        })
    });

