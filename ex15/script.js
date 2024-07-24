function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.getElementById('res')
        if (fano.value.length == 0 || Number(fano.value) > ano ) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else{
            var fsex = document.getElementsByName('radsex') 
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade > 10) {
                    img.setAttribute('src', 'bebeM.jpg')

                }else if (idade < 21) {
                    img.setAttribute('src', 'jovemM')

                }else if (idade < 50) {
                    img.setAttribute('src', 'home.jpg')

                } else {
                    img.setAttribute('src', 'velho.jpg')

                }
                
            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'bebeF.jpg')
                    
                }else if (idade < 21) {
                    img.setAttribute('src', 'jovemF.jpg')
                    
                }else if (idade < 50) {
                    img.setAttribute('src', 'mulher.jpg')
                    
                } else {
                    img.setAttribute('src', 'velha.jpg')
                    
                }
            }
            res.appendChild(img)

            res.innerHTML = `Detectamos ${genero} com ${idade}`
        } 


}