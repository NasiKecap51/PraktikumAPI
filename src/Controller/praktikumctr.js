exports.profil = (req, res) => {
    const name = req.params.name
    const age = req.params.age
    const kelas = req.params.kelas
    let response = {
        nama: name,
        umur: age,
        kelas: kelas
    }
    return res.json(response)
}

exports.identitas = (req, res) => {
    const name = req.params.name
    const kelas = req.params.kelas
    let response = {
        nama: name,
        kelas: kelas
    }
    return res.json(response)
}

exports.bujurSangkar = (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    return res.json(response)
}