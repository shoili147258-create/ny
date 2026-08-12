  
        const likeBtn = document.getElementById('like-btn');
        const likeCount = document.getElementById('like-count');

        let count = ; // الرقم المبدئي

        // عند الضغط (click) يتم زيادة الرقم وتحديثه فوراً
        likeBtn.addEventListener('click', () => {
            count++; 
            likeCount.textContent = count; 
        });
  
