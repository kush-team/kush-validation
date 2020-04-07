let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
scanner.addListener('scan', function (content) {
  regex = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm)
  if (regex.test(content)) {
    window.location.href = '/'
    window.open(content, 'QR')
  } else {
    console.log('QR NO VALIDO');
  }
});

Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
      var selectedCam = cameras[0];
      cameras.forEach((c) => {
        if (c.name.indexOf('back') != -1) {
            selectedCam = c;
            return false;
        }
      });
      scanner.start(selectedCam);
  } else {
      console.error('No cameras found.');
  }
}).catch(function (e) {
  console.error(e);
});
