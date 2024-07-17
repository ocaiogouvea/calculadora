document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculate');
    var submitLeadButton = document.getElementById('submitLead');
    var closeLeadModal = document.querySelector('.close');
    if(calculateButton){
        calculateButton.addEventListener('click', function() {
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value);
            var age = parseInt(document.getElementById('age').value);
            var activity = parseFloat(document.getElementById('activity').value);
    
            if (weight && height && age && activity) {
                var bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
                var get = bmr * activity;
                localStorage.setItem('getResult', get.toFixed(2));
                document.getElementById('leadModal').style.display = 'flex'; // Exibe o modal
            } else {
                alert('Por favor, preencha todos os campos corretamente.');
            }
        });  
    }
    if(calculateButton){
        submitLeadButton.addEventListener('click', function() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var whatsapp = document.getElementById('whatsapp').value;
    
            if (name && email && whatsapp) {
                document.getElementById('leadModal').style.display = 'none'; // Fecha o modal após captura dos dados
                window.location.href = 'resultado.html'; // Redireciona para a página de resultados
            } else {
                alert('Por favor, preencha todos os campos para continuar.');
            }
        });
        }
        if(calculateButton){
            closeLeadModal.addEventListener('click', function() {
                document.getElementById('leadModal').style.display = 'none'; // Fecha o modal
                });

        }
    if (submitLeadButton) {

        submitLeadButton.addEventListener('click', function() {
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value);
            var age = parseInt(document.getElementById('age').value);
            var activity = parseFloat(document.getElementById('activity').value);

            if (weight && height && age && activity) {
                var bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
                var get = bmr * activity;

                localStorage.setItem('getResult', get.toFixed(2));

                var deficit = 350; // Valor do déficit calórico
                var dietCalories = Math.round((get - deficit) / 100) * 100; // Arredonda para o múltiplo de 100 mais próximo

                // Garante que o valor mínimo da dieta seja 1200 kcal
                if (dietCalories < 1200) {
                    dietCalories = 1200;
                }

                localStorage.setItem('dietCalories', dietCalories);

                window.location.href = 'resultado.html';
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }

    // Para resultado.html
    if (window.location.pathname.includes('resultado.html')) {
        var getResult = localStorage.getItem('getResult');
        var dietCalories = localStorage.getItem('dietCalories');

        if (getResult && dietCalories) {
            document.getElementById('get-result').textContent = getResult;
            document.getElementById('diet-calories').textContent = dietCalories + " kcal";
            document.getElementById('diet-image').src = 'assets/images/MUDE-' + dietCalories + 'kcal.jpg';
        } else {
            alert('Erro ao recuperar os dados. Por favor, tente novamente.');
        }
    }
});