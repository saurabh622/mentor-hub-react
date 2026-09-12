# Mentor Hub

A premium, responsive React + Vite mentoring portfolio inspired by the visual language of the supplied reference website.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## Customize

Most personal content lives in:

`src/data/profile.js`

Change:
- name / role
- headline
- LinkedIn / email / phone
- stats
- mentoring pillars
- experience
- technology stack
- well-being section

## Deploy to Ubuntu EC2 with Nginx

After building:

```bash
sudo apt update
sudo apt install nginx -y
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
sudo systemctl enable nginx
sudo systemctl restart nginx
```

Open ports 80 and 443 in the EC2 Security Group.

For HTTPS with a domain:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d example.com -d www.example.com
```

Replace the form handler in `src/App.jsx` with your preferred email, calendar, or backend integration before production use.
