export const cargarInformacion = async (req, res) => {
    try {
        const { nombreempresa } = req.body;
        res.send("Nombre de la empresa: " + nombreempresa);
    } catch (error) {

    }
}
export const verEmpresas = async (req, res) => {
    try {
        res.send("Listando todas las empresas")
    } catch (error) {
        
    }
}
export const habilitarEmpresa = async (req, res) => {
    try {
        res.send("Habilitar empresa")
    } catch (error) {
        
    }
}
export const home = (req, res) => {
    res.send("Todo bien");
}