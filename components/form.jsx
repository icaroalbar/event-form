import InputMask from 'react-input-mask';

const Form = () => {

    const handleSubmit = () => {

        const form = document.getElementById('form')
        form.addEventListener('submit', _ => _.preventDefault())

        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const whatsapp = document.getElementById('whatsapp').value
        const consultor = document.getElementById('consultor').value
        const produtos = document.getElementById('produtos').value
        const obsevacao = document.getElementById('obsevacao').value

        fetch('api/hello', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                whatsapp,
                consultor,
                produtos,
                obsevacao
            })
        }).then(response => {
            console.log(response)
            alert('Email enviado com sucesso!')
        }).catch(error => {
            console.log(error)
            alert('Ocorreu um erro')
        })
    }

    return (
        <div className="h-80vh py-10 flex justify-center">
            <form id="form">
                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome:" className="block my-2 border border-blue-900 p-1 rounded-md" required />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" id="email" placeholder="Digite seu nome:" className="block my-2 border border-blue-900 p-1 rounded-md" required />
                </label>
                <label>
                    <span>WhatsApp:</span>
                    <InputMask type="text" mask="(99) 99999-9999" id="whatsapp" name="whatsapp" placeholder="Digite seu numero:" className="block my-2 border border-blue-900 p-1 rounded-md" />
                </label>
                <label>
                    <span>Consultor(a):</span>
                    <select name="consultor" id="consultor" className="block my-2 border border-blue-900 p-1 rounded-md" required>
                        <option defaultValue>Selecione o cunsultor...</option>
                        <option value="0">Agatha Medeiros</option>
                        <option value="1">Alessandra Tavares</option>
                        <option value="2">Claudio  Amoedo</option>
                        <option value="3">Eduardo Torres</option>
                        <option value="4">Icaro Albar</option>
                        <option value="5">Jocyele Batista</option>
                        <option value="6">Jose Lucas</option>
                        <option value="7">Leandro Ribeiro</option>
                        <option value="8">Luciano Deccache</option>
                        <option value="9">Lucy Deccache</option>
                        <option value="10">Luiz Paulo</option>
                        <option value="11">Marco Alves</option>
                        <option value="12">Felipe Rodrigues</option>
                        <option value="13">Patr??cia Cruz</option>
                        <option value='14'>Outros</option>
                    </select>
                </label>
                <label>
                    <span>Interesse em:</span>
                    <select name="produtos" id="produtos" className="block my-2 border border-blue-900 p-1 rounded-md" required>
                        <option defaultValue>Selecione o produto...</option>
                        <option value="Cons??rcio">Cons??rcio</option>
                        <option value='Investimentos'>Investimentos</option>
                        <option value="Plano de Sa??de">Plano de Sa??de</option>
                        <option value="Seguros">Seguros</option>
                    </select>
                </label>
                <label className='flex flex-col pb-3'>
                    <span>Interesse:</span>
                    <textarea className='border border-blue-900 rounded-md p-1' name="obsevacao" id="obsevacao" cols="30" rows="10" placeholder='Digite aqui...'></textarea>
                </label>
                <input onClick={handleSubmit} type="submit" value="Enviar" className="py-2 px-5 text-white bg-blue-700 rounded-md hover:bg-blue-600 cursor-pointer" />
            </form>
        </div>
    )
}

export default Form 