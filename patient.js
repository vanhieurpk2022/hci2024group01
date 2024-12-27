
      
      const timeSlots = document.querySelectorAll('.time-slot div');
      const message = document.getElementById('success-message');

      timeSlots.forEach(slot => {
          slot.addEventListener('click', () => {
              
              timeSlots.forEach(s => s.classList.remove('selected'));
             
              slot.classList.add('selected');
              
             
              message.style.display = 'block';

              
              setTimeout(() => {
                  message.style.display = 'none';
              }, 2000);
          });
      });
