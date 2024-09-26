// Welcoming speech
window.onload = function() {
    const name = prompt("Please enter your name:");
    document.getElementById("user-name").textContent = name || "Guest";
};

// Validate form and show values
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman standar

    // Mengambil nilai dari input
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Membuat output string
    const output = `
        Nama: ${name}<br>
        Tanggal Lahir: ${birthdate}<br>
        Jenis Kelamin: ${gender}<br>
        Pesan: ${message}
    `;

    // Menampilkan output di dalam div form-output
    document.getElementById('form-output').innerHTML = output;

    // Reset form setelah pengiriman
    document.getElementById('contact-form').reset();
});
