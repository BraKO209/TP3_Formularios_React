function CalculadoraIMC() {
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [imc, setIMC] = React.useState(null);

    const calcularIMC = () => {
        const p = parseFloat(peso);
        const h = parseFloat(altura);
        if (!p || !h) return;
        const valor = p / (h * h);
        setIMC(valor.toFixed(1));
    };

    const getMensaje = () => {
        if (imc < 18.5) return { texto: "Bajo peso", color: "yellow" };
        if (imc < 25) return { texto: "Peso normal", color: "green" };
        if (imc < 30) return { texto: "Sobrepeso", color: "orange" };
        return { texto: "Obesidad", color: "red" };
    };

    return (
        <div>
            <h1>Calculadora IMC</h1>
            <input type="number" placeholder="Peso (kg)" value={peso} onChange={e => setPeso(e.target.value)} />
            <input type="number" placeholder="Altura (m)" value={altura} onChange={e => setAltura(e.target.value)} />
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc && (
                <p style={{ color: getMensaje().color }}>
                    Tu IMC es {imc} - {getMensaje().texto}
                </p>
            )}
        </div>
    );
}

ReactDOM.render(<CalculadoraIMC />, document.getElementById("root"));
