document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("form");
  const khodamInput = document.getElementById("khodam");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Generate a random number between 1 and 10
    const randomKhodam = Math.floor(Math.random() * 10) + 1;
    let khodamValue;
    switch (randomKhodam) {
      case 1:
        khodamValue = "Tidak Ada Khodam";
        break;
      case 2:
        khodamValue = "Harimau Banci";
        break;
      case 3:
        khodamValue = "Belalang Jerman";
        break;
      case 4:
        khodamValue = "Kodok Thailand";
        break;
      case 5:
        khodamValue = "Jangkrik Cacat";
        break;
      case 6:
        khodamValue = "Naga Yatim";
        break;
      case 7:
        khodamValue = "Singa Kawin";
        break;
      case 8:
        khodamValue = "Serigala Kepala Keluarga";
        break;
      case 9:
        khodamValue = "Ular Piatu";
        break;
      case 10:
        khodamValue = "Nenek Birahi";
        break;
      default:
        khodamValue = "Khodam yang Dimiliki";
        break;
    }

    // Update the placeholder of the khodam input
    khodamInput.placeholder = `${khodamValue}`;
  });
});
