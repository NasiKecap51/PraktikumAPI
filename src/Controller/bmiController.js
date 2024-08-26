exports.bmi = (req, res) => {
    const tinggi = Number(req.body.tinggi)/100
    const berat = Number(req.body.berat)
    let kategori = ""

    const bmi = berat / (Math.pow(tinggi, 2))

    if (bmi < 18.5) {
        kategori = "Kekurangan berat badan";
    } else if (bmi < 24.9) {
        kategori = "Normal";
    } else if (bmi < 29.9) {
        kategori = "Kelebihan Berat badan";
    } else if (bmi >= 30) {
        kategori = "Obesitas";
    } else {
        kategori = "ga normal "
    }

    let response = {
        tinggi: tinggi + "m",
        berat: berat,
        bmi: bmi.toFixed(2),
        status: kategori 
    }

    return res.json(response)
}