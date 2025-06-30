function BotonesAlternados() {
    const [habilitado, setHabilitado] = React.useState("izquierdo");

    return (
        <div>
            <h1>Botones Alternados</h1>
            <button
                onClick={() => setHabilitado("derecho")}
                disabled={habilitado !== "izquierdo"}
            >
                Izquierdo
            </button>
            <button
                onClick={() => setHabilitado("izquierdo")}
                disabled={habilitado !== "derecho"}
            >
                Derecho
            </button>
        </div>
    );
}

ReactDOM.render(<BotonesAlternados />, document.getElementById("root"));
