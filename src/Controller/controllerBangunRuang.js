exports.kubus = (req, res) => {
    let sisi = Number(req.body.sisi)
    
    const volume = sisi * 3
    const luasPermukaan = 6 * (Math.pow(sisi, 2))

    let response = {
        sisi: sisi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}


exports.balok = (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    
    let volume = panjang * lebar * tinggi
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}


exports.bola = (req, res) => {
    let jari = Number(req.body.jari)
    
    let volume = 4/3 * Math.PI * (Math.pow(jari, 3))
    let luasPermukaan = 4 * Math.PI * (Math.pow(jari, 2))

    let response = {
        jari_jari: jari,
        volume: volume.toFixed(2),
        luasPermukaan: luasPermukaan.toFixed(2),
    }
    return res.json(response)
}



exports.tabung = (req, res) => {
    let jari = Number(req.body.jari)
    let tinggi = Number(req.body.tinggi)
    
    let volume = Math.PI * (Math.pow(jari, 2)) * tinggi
    let luasPermukaan = 2 * Math.PI * jari * (jari + tinggi)

    let response = {
        jari_jari: jari,
        tinggi: tinggi,
        volume: volume.toFixed(2),
        luasPermukaan: luasPermukaan.toFixed(2),
    }
    return res.json(response)
}