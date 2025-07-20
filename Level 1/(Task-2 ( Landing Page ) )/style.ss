
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Fonts & Base */
body {
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  background-color: #f8f9fa;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  background-color: #1e3a8a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar .logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.navbar .nav-links {
  display: flex;
  gap: 30px;
  list-style: none;
}

.navbar .btn {
  background-color: white;
  color: #1e3a8a;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
}

.navbar .btn:hover {
  background-color: #e0e0e0;
}

/* Hero */
.hero {
  background: linear-gradient(to right, #1e3a8a, #2563eb);
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.btn-primary {
  background-color: #facc15;
  color: #1e3a8a;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s ease;
}

.btn-primary:hover {
  background-color: #eab308;
}

/* Features */
.features {
  padding: 60px 10%;
  background-color: #ffffff;
  text-align: center;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.feature-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.feature-box {
  flex: 1 1 250px;
  background: #e0f2fe;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.05);
}

/* About */
.about {
  padding: 60px 10%;
  background-color: #f1f5f9;
  text-align: center;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* CTA */
.cta {
  padding: 60px 10%;
  background-color: #1e3a8a;
  color: white;
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

/* Footer */
.footer {
  padding: 20px 10%;
  background-color: #0f172a;
  color: white;
  text-align: center;
}
