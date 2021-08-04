import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {CartItem} from "../../model/cart-item";
import {CartService} from "../../service/cart/cart.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public product: Product = new Product("Xe Dã Ngoại Của Mia", 759000, 1269000, "LEGO FRIENDS", "SKU41371",
    "<div class='content-heading'><h3 class='title text-uppercase'>Mô tả sản phẩm</h3></div>\n" +
    "<div class='data item content' id='attributedescription'>\n" +
    "<div class='product attribute description'>\n" +
    "    <div class='value'><p style='margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span style='font-family: none;'></span></p><h2 style='color: #000000;'><span><strong style='font-weight: bold;'>LEGO FRIENDS 41371 Xe Dã Ngoại Của Mia ( 216 Chi tiết)</strong></span></h2><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>Yên tâm cho một ngày khám phá rừng trên lưng ngựa. LEGO® Friends Mia và Emma đang đưa Bianca đến khu rừng để tập thể dục. Giúp họ chuẩn bị với các phụ kiện ngựa, sau đó đưa nó đến xe tải 4x4 thú vị của Mia và họ đã sẵn sàng đi. Tại khu rừng, cởi bỏ tấm chăn của Bianca và lắp yên của cô ấy để Mia có thể đi dạo qua những tán cây. Hãy để mắt đến những sinh vật trong rừng. Cái gì vậy? Đó là một chú thỏ nhỏ đến để chào!</span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Đồ chơi ngựa cho trẻ em này bao gồm 2 hình búp bê mini: Mia và Emma, ​​cùng với một con ngựa đồ chơi và một hình con thỏ. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Có đồ chơi xe kéo ngựa LEGO® Friends 4x4 có thể lắp ráp và bảng điều khiển bên có bản lề và cửa sau, cảnh rừng có thể xây dựng cho thỏ và một hộp phụ kiện chăm sóc ngựa. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Các yếu tố phụ kiện bao gồm chăn ngựa, yên ngựa, dây cương, mũ bảo hiểm cưỡi, cà rốt, cỏ khô, bàn chải, cung và kính râm. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Trẻ em có thể nhập vai lấy đồ chơi xe kéo ngựa, sau đó đi đón Emma trong ATV của Mia. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Giúp con bạn thể hiện sự quan tâm của chúng bằng cách cho ngựa ăn cà rốt và một ít cỏ khô. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Nhiều kịch bản chơi cho phép trí tưởng tượng tự do lang thang giữa bối cảnh động vật hoang dã. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Sử dụng ứng dụng LEGO® Life để truy cập các hướng dẫn xây dựng Hướng dẫn PLUS trực quan. Giúp các nhà xây dựng trẻ hơn trong quá trình xây dựng, với các chức năng thu phóng, xoay và chế độ ma dễ sử dụng để hình dung tác phẩm của họ khi họ di chuyển. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Bộ ngựa LEGO® Friends khuyến khích chơi theo trí tưởng tượng và làm cho việc xây dựng trở nên sáng tạo và thú vị. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Làm một món quà Giáng sinh lý tưởng hoặc quà tặng cho mùa lễ cho những đứa trẻ sáng tạo. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Bộ này là một phần của thế giới LEGO® Friends gồm các anh hùng hàng ngày và các kịch bản thú vị trong thế giới thực. • ATV có kích thước cao hơn 2 ”(6cm), dài 3” (9cm) và rộng 1 ”(5cm). </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>• Rơ moóc có kích thước cao hơn 3 ”(8cm), dài 5” (13cm) và rộng 3 ”(8cm).</span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>Thông tin chi tiết: </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>- Chất liệu nhựa an toàn không gây hại cho sức khỏe của bé khi sử dụng. </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>- Độ tuổi phù hợp: 6+ </span></p><p style='color: #000000;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span>- Bộ gồm: 216 chi tiết</span></p><p style='margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span></span></p><div style='width: 100.0%;margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><div style='width: 100.0%;display: block;'><img src='https://vn-live-01.slatic.net/p/2ac01f5e76fbdd1114b5cb5965f66d01.jpg' style='width: 100.0%;display: block;'></div></div><p style='margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span></span></p><p style='margin: 0;padding: 8.0px 0;white-space: pre-wrap;'><span></span></p></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class='content-heading'><h3 class='title text-uppercase'>Thông tin sản phẩm</h3></div>\n" +
    "<div class='data item content' id='additional' data-role='content'>    <div class='additional-attributes-wrapper table-wrapper'>\n" +
    "        <table class='data table additional-attributes' id='product-attribute-specs-table'>\n" +
    "            <caption class='table-caption'>Thêm thông tin</caption>\n" +
    "            <tbody>\n" +
    "                                                <tr>\n" +
    "                        <th class='col label' scope='row'>Chủ đề</th>\n" +
    "                        <td class='col data' data-th='Chủ đề'>LEGO FRIENDS HEARTLAKE CITY</td>\n" +
    "                    </tr>\n" +
    "                                                                <tr>\n" +
    "                        <th class='col label' scope='row'>Xuất xứ</th>\n" +
    "                        <td class='col data' data-th='Xuất xứ'>Trung Quốc</td>\n" +
    "                    </tr>\n" +
    "                                                                <tr>\n" +
    "                        <th class='col label' scope='row'>Mã VT</th>\n" +
    "                        <td class='col data' data-th='Mã VT'>41371</td>\n" +
    "                    </tr>\n" +
    "                                                                <tr>\n" +
    "                        <th class='col label' scope='row'>Thương hiệu</th>\n" +
    "                        <td class='col data' data-th='Thương hiệu'>LEGO FRIENDS</td>\n" +
    "                    </tr>\n" +
    "                                                                <tr>\n" +
    "                        <th class='col label' scope='row'>Xuất xứ thương hiệu</th>\n" +
    "                        <td class='col data' data-th='Xuất xứ thương hiệu'>Đan Mạch            </td>\n" +
    "                    </tr>\n" +
    "                                                                <tr>\n" +
    "                        <th class='col label' scope='row'>Tuổi</th>\n" +
    "                        <td class='col data' data-th='Tuổi'>6-11 tuổi, 12 tuổi trở lên</td>\n" +
    "                    </tr>\n" +
    "                                                                <tr>\n" +
    "                        <th class='col label' scope='row'>Giới tính</th>\n" +
    "                        <td class='col data' data-th='Giới tính'>GIRL</td>\n" +
    "                    </tr>\n" +
    "                                        </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>",
    "2", "1",['https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/0/9/09_206.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/0/1/01_226.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/0/4/04_225.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/0/3/03_227.jpg']);
  public imgZoom: string = this.product.images[0];
  public carts: CartItem[]=[]
  constructor(private cartService:CartService) {
    this.cartService.cart$.subscribe(cart => {
      this.carts=cart
    })
  }

  ngOnInit(): void {
  }

  selectImg(img: string) {
    this.imgZoom = img;
  }

  handleAddToCart(productItem:Product){
    this.cartService.addCart(productItem);
  }
}
