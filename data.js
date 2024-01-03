function cek() {
    const birthdayInput = document.getElementById("hbd");
    const hbd = birthdayInput.value;

    const now = new Date().getFullYear();
    const age = now - hbd

    const view = document.getElementById("view")
    // alert(`Usia Anda Saat Ini Adalah ${age} Tahun`)
    view.innerHTML = `Usia Anda Saat Ini ${age} Tahun` 
}