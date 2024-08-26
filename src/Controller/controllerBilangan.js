exports.decimal = (req, res) => {
    const value = Number(req.body.value)

    const biner = value.toString(2) //decimal > biner
    const octal = value.toString(8) //decimal > octal
    const hex = value.toString(16).toUpperCase() //decimal > hexadecimal

    let response = {
        decimal: value,
        biner: biner,
        octal: octal,
        hexadecimal: hex
    }
    return res.json(response)
}



exports.biner = (req, res) => {
    const value = Number(req.body.value)

    if (!/^[01]+$/.test(value)) {
        return res.status(400).json({ error: "Nilai harus berupa angka biner (0 dan 1)" });
    }

    const decimal = parseInt(value, 2)
    const octal = parseInt(value, 2).toString(8)
    const hex = parseInt(value, 2).toString(16).toUpperCase() 

    let response = {
        biner: value,
        decimal: decimal,
        octal: octal,
        hexadecimal: hex
    }
    return res.json(response)
}




exports.octal = (req, res) => {
    const value = Number(req.body.value)

    if (!/^[0-7]+$/.test(value)) {
        return res.status(400).json({ error: "Nilai harus berupa angka oktal (0-7)" });
    }

    const decimal = parseInt(value, 8)
    const biner = decimal.toString(2)
    const hex = decimal.toString(16).toUpperCase()

    let response = {
        octal: value,
        decimal: decimal,
        biner: biner,
        hexadecimal: hex
    }
    return res.json(response)
}





exports.hexadecimal = (req, res) => {
    const value = Number(req.body.value)

    if (!/^[0-9A-F]+$/.test(value)) {
        return res.status(400).json({ error: "Nilai harus berupa angka heksadesimal (0-9, A-F)" });
    }

    const decimal = parseInt(value, 16)
    const biner = decimal.toString(2)
    const octal = decimal.toString(8)

    let response = {
        hexadecimal: value,
        decimal: decimal,
        biner: biner,
        octal: octal
    }
    return res.json(response)
}