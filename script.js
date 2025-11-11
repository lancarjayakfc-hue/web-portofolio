// Toggle foto profil di sidebar saat tombol diklik
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('togglePhotoBtn');
  const profileImg = document.getElementById('profile-img');
  let visible = true;

  toggleBtn.addEventListener('click', function() {
    visible = !visible;
    profileImg.style.display = visible ? 'block' : 'none';
    toggleBtn.textContent = visible ? 'Sembunyikan Foto' : 'Tampilkan Foto';
  });
});
