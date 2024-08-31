function showPage(page) {
    // بارگذاری محتویات صفحه جدید
    fetch(page + '.html')
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Failed to load page: ' + response.status);
            }
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('content').innerHTML = '<p>صفحه مورد نظر یافت نشد.</p>';
        });
}
