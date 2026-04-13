---
description: Workflow tạo báo cáo PDF chuyên nghiệp từ HTML/Markdown.
---

# /report - Tạo Báo cáo Chuyên nghiệp

Sử dụng workflow này để chuyển đổi các nội dung marketing, kết quả phân tích hoặc đề xuất thành tệp PDF chất lượng cao.

## Bước 1: Xác định loại báo cáo

Chọn một trong các định dạng có sẵn để có thiết kế phù hợp:
- `report`: Báo cáo chỉ số, thiết kế hiện đại, nhiều bảng biểu.
- `proposal`: Đề xuất dự án, thiết kế trang trọng.
- `resume`: CV hoặc giới thiệu chuyên gia.
- `portfolio`: Trình bày dự án trực quan.
- `magazine`: Thiết kế dạng tạp chí, nhiều hình ảnh.
- `minimal`: Thiết kế tối giản, sạch sẽ.

## Bước 2: Chuẩn bị nội dung

1. **Tiêu đề (Title)**: Tên chính của báo cáo.
2. **Tác giả (Author)**: Tên người hoặc đội ngũ thực hiện.
3. **Nội dung (Content)**: Cung cấp văn bản theo cấu trúc:
   - Các đề mục (H1, H2, H3)
   - Văn bản nội dung (Body)
   - Các điểm chính (Bullet points)
   - Kết quả (Tables/Charts)

## Bước 3: Tinh chỉnh thiết kế

1. **Màu nhấn (Accent Color)**: Chọn mã màu HEX phù hợp với thương hiệu (ví dụ: `#2D5F8A` cho công nghệ, `#2E5E3A` cho môi trường).
2. **Hình ảnh bìa**: Cung cấp đường dẫn hoặc mô tả hình ảnh cho trang bìa.

## Bước 4: Thực thi tạo PDF

Sử dụng công cụ `minimax-pdf` để render:
1. Tổng hợp dữ liệu vào tệp `content.json`.
2. Chạy lệnh tạo báo cáo.
3. Kiểm tra tệp xuất ra (`out.pdf`).

## Kết quả đầu ra

- Tệp PDF chuyên nghiệp, sẵn sàng in ấn hoặc gửi khách hàng.
- Báo cáo với bìa đẹp, mục lục tự động và dàn trang tinh tế.

## Skills Used

- minimax-pdf
- vision-analysis (nếu cần phân tích ảnh bìa)
