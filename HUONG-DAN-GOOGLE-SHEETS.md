# HUONG DAN: KET NOI DON HANG VOI GOOGLE SHEETS + EMAIL

## Tong quan
Khi khach dat hang tren gficon.vn:
1. Thong tin don hang tu dong ghi vao Google Sheets (ten, SDT, dia chi, san pham)
2. Email thong bao gui den contact@gficon.vn

---

## BUOC 1: Tao Google Sheets

1. Vao Google Drive (drive.google.com)
2. Nhan **+ Moi** > **Google Trang tinh** (Google Sheets)
3. Dat ten: **"GF ICON - Don Hang"**
4. KHONG can tao header — script se tu tao

---

## BUOC 2: Tao Google Apps Script

1. Trong Google Sheets vua tao, nhan menu **Phan mo rong** (Extensions) > **Apps Script**
2. Xoa het code mac dinh trong editor
3. Mo file `google-apps-script.js` trong thu muc gf-icon-web
4. Copy TOAN BO noi dung, dan vao editor Apps Script
5. (Tuy chon) Doi email o dong dau: `const NOTIFICATION_EMAIL = "contact@gficon.vn";`
6. Nhan **Luu** (Ctrl+S)

---

## BUOC 3: Test thu

1. Trong Apps Script Editor, chon ham `testDoPost` tu dropdown (ben canh nut Run)
2. Nhan **Chay** (Run)
3. Lan dau se hoi cap quyen — nhan **Xem xet quyen** > **Nang cao** > **Di den (ten du an)** > **Cho phep**
4. Kiem tra:
   - Google Sheets co dong moi voi du lieu test
   - Email contact@gficon.vn nhan duoc thong bao

---

## BUOC 4: Deploy lam Web App

1. Trong Apps Script Editor, nhan **Trien khai** (Deploy) > **Trien khai moi** (New deployment)
2. Nhan bieu tuong banh rang > chon **Ung dung web** (Web app)
3. Cai dat:
   - **Mo ta**: "GF ICON Don Hang"
   - **Thuc thi voi tu cach**: "Toi" (Me)
   - **Ai co quyen truy cap**: "Bat ky ai" (Anyone)
4. Nhan **Trien khai** (Deploy)
5. **COPY URL** hien ra (dang: https://script.google.com/macros/s/AKfyc.../exec)

---

## BUOC 5: Dan URL vao website

1. Mo file `.env.local` trong thu muc `gf-icon-web`
2. Dan URL vao dong:
   ```
   GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfyc.../exec
   ```
3. Luu file
4. Deploy lai website:
   ```
   vercel --prod --yes
   ```

---

## BUOC 6: Them bien moi truong tren Vercel

1. Vao vercel.com > project gf-icon-web > Settings > Environment Variables
2. Them:
   - **Name**: `GOOGLE_SHEET_WEBHOOK_URL`
   - **Value**: URL tu buoc 4
   - **Environment**: Production
3. Nhan Add
4. Deploy lai: `vercel --prod --yes`

---

## Xong! Tu gio moi don hang se:
- Tu dong ghi vao Google Sheets (ten, SDT, dia chi, san pham, tong tien)
- Gui email thong bao den contact@gficon.vn

## Luu y:
- Google Apps Script mien phi, gioi han 20,000 email/ngay
- Du du cho giai doan dau
- Sheets co the xuat Excel bat ky luc nao
- Neu can thay doi email nhan, sua dong NOTIFICATION_EMAIL trong Apps Script
