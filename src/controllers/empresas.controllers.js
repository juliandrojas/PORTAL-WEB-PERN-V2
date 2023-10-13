export const cargarInformacion = async (req, res) => {
    try {
        const { nombreempresa } = req.body;
        const file = req.file;
        res.send("Nombre de la empresa: " + nombreempresa + " File: " + file);
        //Construimos la url de la imagen utilizando la ruta local del servidor
    } catch (error) {

    }
}
export const home = (req, res) => {
    res.send("Todo bien");
}