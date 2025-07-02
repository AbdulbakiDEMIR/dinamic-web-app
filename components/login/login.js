export function Login(){
    return `
            <div class="row w-100">
                <div class="col-12 col-sm-8 col-lg-5 col-xxl-4 mx-auto">
                    <div class="card shadow-lg p-4">
                        <h2 class="animate-top2">Giriş Yap</h2>
                        <form onsubmit="login(event)">
                            <div class="mb-3">
                                <label for="username" class="form-label">Kullanıcı Adı</label>
                                <input type="text" class="form-control" name="username" id="username" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Şifre</label>
                                <input type="password" class="form-control" name="password" id="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Giriş Yap</button>
                        </form>
                    </div>
                </div>
            </div>
    `
};
