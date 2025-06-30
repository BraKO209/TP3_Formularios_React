function Calculadora() {
    const [num1, setNum1] = React.useState("");
    const [num2, setNum2] = React.useState("");
    const [operacion, setOperacion] = React.useState("sumar");
    const [resultado, setResultado] = React.useState(null);

    const calcular = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let res;

        switch (operacion) {
            case "sumar":
                res = a + b;
                break;
            case "restar":
                res = a - b;
                break;
            case "multiplicar":
                res = a * b;
                break;
            default:
                res = "Operación no permitida";
        }

        setResultado(res);
    };

    return (
        <div>
            <h1>Calculadora React</h1>
            <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="Número 1" />
            <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Número 2" />
            <select value={operacion} onChange={e => setOperacion(e.target.value)}>
                <option value="sumar">Sumar</option>
                <option value="restar">Restar</option>
                <option value="multiplicar">Multiplicar</option>
                <option value="dividir">Dividir</option>
            </select>
            <button onClick={calcular} disabled={operacion === "dividir"}>Calcular</button>
            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
}

ReactDOM.render(<Calculadora />, document.getElementById("root"));
