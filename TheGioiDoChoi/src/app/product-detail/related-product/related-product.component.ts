import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit {
  public listProducts: Product[] =[new Product("ORI dã ngoại cùng cún Corgi",
    209000,
    299000,
    "ORI",
    "SKU36311B-ORI",
    "<div class='content-heading'><h3 class='title text-uppercase'>Mô tả sản phẩm</h3></div><div class='data item content' id='attributedescription'><div class='product attribute description'>    <div class='value'><h2>ORI ORI dã ngoại cùng cún Corgi 36311A-ORI</h2><p>Bé yêu thích thời trang và mơ ước sau này trở thành một nhà thiết kế thời trang nổi tiếng. Bé có rất nhiều ý tưởng nhưng không biết phải bắt đầu từ đâu. Hãy dành tặng bé búp bê Ori để giúp bé từng bước thực hiện ước mơ của mình mẹ nhé! Với cô búp bê này, bé có tha hồ sáng tạo những mẫu trang phục độc đáo theo phong cách của mình. Đồ chơi búp bê Ori lấy hình mẫu từ cô công chúa Ori xinh xắn, đáng yêu trong bộ phim hoạt hình nổi tiếng, với đôi mắt tròn, khuôn mặt bầu bĩnh, trang phục bắt mắt sẽ là người bạn thân thiết của các em nhỏ.<br>Giúp phát triển tư duy và khả năng sáng tạo của bé: Với cô búp bê Ori này, bé có thể thỏa sức tưởng tượng các kiểu dáng thời trang thú vị cho nàng búp bê, qua đó khả năng tư duy và óc sáng tạo của bé sẽ được phát huy tối đa, đồng thời giúp bé thật khéo tay khi làm những việc đòi hỏi sự khéo léo.</p><h3>Thông tin sản phẩm:</h3><p>Chất liệu an toàn: Búp bê được làm từ nhựa cao cấp không góc cạnh, không có chất độc hại, bảo đảm an toàn cho bé khi sử dụng.<br>Thiết kế sinh động, đáng yêu: Búp bê có những bộ quần áo rất xinh xắn và thời trang chắc chắn sẽ làm bé thích thú.<br>Có thể kết hợp với những trò chơi khác: Bé có thể chơi đồ hàng, đóng vai các nhân vật khác nhau để học cách quan tâm, chăm sóc người khác. Hay bé có thể chải tóc, trang điểm, cho búp bê Ori chơi cùng những nàng công chúa khác trong bộ sưu tập Búp bê Công chúa Ori. </p><ul><li>Xuất xứ thương hiệu: HONGKONG</li><li>Giới tính: Bé gái</li><li>Độ tuổi: 3 đến 9 tuổi</li><li>CÔNG CHÚA ORI là sản phẩm đồ chơi mô phỏng các nhân vật trong bộ phim hoạt hình nổi tiếng cùng tên, được phát sóng trên kênh truyền hình BIBI TV và SEE TV; hiện đã có mặt trên kênh Youtube MyKingdom. Sản phẩm đồ chơi cao cấp với nhiều ưu điểm:</li></ul><p>1. Phù hợp cho trẻ từ 3 tuổi.<br>2. Chất liệu nhựa cao cấp an toàn cho bé khi chơi.<br>3. Búp bê khớp ẩn bên trong, tạo sự tinh tế và chân thật.<br>4. Phụ kiện đi kèm đa dạng, phong phú, chia theo nhiều chủ đề khác nhau gần gũi với bé.<br>5. Đồ chơi mô phỏng cuộc sống, giúp bé phát triển kỹ năng mềm, kích thích sáng tạo và học hỏi thêm nhiều điều hay.</p></div></div></div><div class='content-heading'><h3 class='title text-uppercase'>Thông tin sản phẩm</h3></div><div class='data item content' id='additional' data-role='content'>    <div class='additional-attributes-wrapper table-wrapper'>        <table class='data table additional-attributes' id='product-attribute-specs-table'>            <caption class='table-caption'>Thêm thông tin</caption>            <tbody>                                                <tr>                        <th class='col label' scope='row'>Chủ đề</th>                        <td class='col data' data-th='Chủ đề'>ORI ACTIVITIES</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Xuất xứ</th>                        <td class='col data' data-th='Xuất xứ'>TRUNG QUỐC</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Mã VT</th>                        <td class='col data' data-th='Mã VT'>36311B-ORI</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Thương hiệu</th>                        <td class='col data' data-th='Thương hiệu'>ORI</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Xuất xứ thương hiệu</th>                        <td class='col data' data-th='Xuất xứ thương hiệu'>HONGKONG            </td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Tuổi</th>                        <td class='col data' data-th='Tuổi'>1-3 tuổi, 4-6 tuổi, 6-11 tuổi, 12 tuổi trở lên</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Giới tính</th>                        <td class='col data' data-th='Giới tính'>GIRL</td>                    </tr>                                        </tbody>        </table>    </div></div>",
    "3","1",['https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_2.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/h/q/hqdefault_12_38.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_1.jpg']
  ),new Product("ORI dã ngoại cùng cún Corgi",
    209000,
    299000,
    "ORI",
    "SKU36311B-ORI",
    "<div class='content-heading'><h3 class='title text-uppercase'>Mô tả sản phẩm</h3></div><div class='data item content' id='attributedescription'><div class='product attribute description'>    <div class='value'><h2>ORI ORI dã ngoại cùng cún Corgi 36311A-ORI</h2><p>Bé yêu thích thời trang và mơ ước sau này trở thành một nhà thiết kế thời trang nổi tiếng. Bé có rất nhiều ý tưởng nhưng không biết phải bắt đầu từ đâu. Hãy dành tặng bé búp bê Ori để giúp bé từng bước thực hiện ước mơ của mình mẹ nhé! Với cô búp bê này, bé có tha hồ sáng tạo những mẫu trang phục độc đáo theo phong cách của mình. Đồ chơi búp bê Ori lấy hình mẫu từ cô công chúa Ori xinh xắn, đáng yêu trong bộ phim hoạt hình nổi tiếng, với đôi mắt tròn, khuôn mặt bầu bĩnh, trang phục bắt mắt sẽ là người bạn thân thiết của các em nhỏ.<br>Giúp phát triển tư duy và khả năng sáng tạo của bé: Với cô búp bê Ori này, bé có thể thỏa sức tưởng tượng các kiểu dáng thời trang thú vị cho nàng búp bê, qua đó khả năng tư duy và óc sáng tạo của bé sẽ được phát huy tối đa, đồng thời giúp bé thật khéo tay khi làm những việc đòi hỏi sự khéo léo.</p><h3>Thông tin sản phẩm:</h3><p>Chất liệu an toàn: Búp bê được làm từ nhựa cao cấp không góc cạnh, không có chất độc hại, bảo đảm an toàn cho bé khi sử dụng.<br>Thiết kế sinh động, đáng yêu: Búp bê có những bộ quần áo rất xinh xắn và thời trang chắc chắn sẽ làm bé thích thú.<br>Có thể kết hợp với những trò chơi khác: Bé có thể chơi đồ hàng, đóng vai các nhân vật khác nhau để học cách quan tâm, chăm sóc người khác. Hay bé có thể chải tóc, trang điểm, cho búp bê Ori chơi cùng những nàng công chúa khác trong bộ sưu tập Búp bê Công chúa Ori. </p><ul><li>Xuất xứ thương hiệu: HONGKONG</li><li>Giới tính: Bé gái</li><li>Độ tuổi: 3 đến 9 tuổi</li><li>CÔNG CHÚA ORI là sản phẩm đồ chơi mô phỏng các nhân vật trong bộ phim hoạt hình nổi tiếng cùng tên, được phát sóng trên kênh truyền hình BIBI TV và SEE TV; hiện đã có mặt trên kênh Youtube MyKingdom. Sản phẩm đồ chơi cao cấp với nhiều ưu điểm:</li></ul><p>1. Phù hợp cho trẻ từ 3 tuổi.<br>2. Chất liệu nhựa cao cấp an toàn cho bé khi chơi.<br>3. Búp bê khớp ẩn bên trong, tạo sự tinh tế và chân thật.<br>4. Phụ kiện đi kèm đa dạng, phong phú, chia theo nhiều chủ đề khác nhau gần gũi với bé.<br>5. Đồ chơi mô phỏng cuộc sống, giúp bé phát triển kỹ năng mềm, kích thích sáng tạo và học hỏi thêm nhiều điều hay.</p></div></div></div><div class='content-heading'><h3 class='title text-uppercase'>Thông tin sản phẩm</h3></div><div class='data item content' id='additional' data-role='content'>    <div class='additional-attributes-wrapper table-wrapper'>        <table class='data table additional-attributes' id='product-attribute-specs-table'>            <caption class='table-caption'>Thêm thông tin</caption>            <tbody>                                                <tr>                        <th class='col label' scope='row'>Chủ đề</th>                        <td class='col data' data-th='Chủ đề'>ORI ACTIVITIES</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Xuất xứ</th>                        <td class='col data' data-th='Xuất xứ'>TRUNG QUỐC</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Mã VT</th>                        <td class='col data' data-th='Mã VT'>36311B-ORI</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Thương hiệu</th>                        <td class='col data' data-th='Thương hiệu'>ORI</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Xuất xứ thương hiệu</th>                        <td class='col data' data-th='Xuất xứ thương hiệu'>HONGKONG            </td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Tuổi</th>                        <td class='col data' data-th='Tuổi'>1-3 tuổi, 4-6 tuổi, 6-11 tuổi, 12 tuổi trở lên</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Giới tính</th>                        <td class='col data' data-th='Giới tính'>GIRL</td>                    </tr>                                        </tbody>        </table>    </div></div>",
    "3","1",['https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_2.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/h/q/hqdefault_12_38.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_1.jpg']
  ),new Product("ORI dã ngoại cùng cún Corgi",
    209000,
    299000,
    "ORI",
    "SKU36311B-ORI",
    "<div class='content-heading'><h3 class='title text-uppercase'>Mô tả sản phẩm</h3></div><div class='data item content' id='attributedescription'><div class='product attribute description'>    <div class='value'><h2>ORI ORI dã ngoại cùng cún Corgi 36311A-ORI</h2><p>Bé yêu thích thời trang và mơ ước sau này trở thành một nhà thiết kế thời trang nổi tiếng. Bé có rất nhiều ý tưởng nhưng không biết phải bắt đầu từ đâu. Hãy dành tặng bé búp bê Ori để giúp bé từng bước thực hiện ước mơ của mình mẹ nhé! Với cô búp bê này, bé có tha hồ sáng tạo những mẫu trang phục độc đáo theo phong cách của mình. Đồ chơi búp bê Ori lấy hình mẫu từ cô công chúa Ori xinh xắn, đáng yêu trong bộ phim hoạt hình nổi tiếng, với đôi mắt tròn, khuôn mặt bầu bĩnh, trang phục bắt mắt sẽ là người bạn thân thiết của các em nhỏ.<br>Giúp phát triển tư duy và khả năng sáng tạo của bé: Với cô búp bê Ori này, bé có thể thỏa sức tưởng tượng các kiểu dáng thời trang thú vị cho nàng búp bê, qua đó khả năng tư duy và óc sáng tạo của bé sẽ được phát huy tối đa, đồng thời giúp bé thật khéo tay khi làm những việc đòi hỏi sự khéo léo.</p><h3>Thông tin sản phẩm:</h3><p>Chất liệu an toàn: Búp bê được làm từ nhựa cao cấp không góc cạnh, không có chất độc hại, bảo đảm an toàn cho bé khi sử dụng.<br>Thiết kế sinh động, đáng yêu: Búp bê có những bộ quần áo rất xinh xắn và thời trang chắc chắn sẽ làm bé thích thú.<br>Có thể kết hợp với những trò chơi khác: Bé có thể chơi đồ hàng, đóng vai các nhân vật khác nhau để học cách quan tâm, chăm sóc người khác. Hay bé có thể chải tóc, trang điểm, cho búp bê Ori chơi cùng những nàng công chúa khác trong bộ sưu tập Búp bê Công chúa Ori. </p><ul><li>Xuất xứ thương hiệu: HONGKONG</li><li>Giới tính: Bé gái</li><li>Độ tuổi: 3 đến 9 tuổi</li><li>CÔNG CHÚA ORI là sản phẩm đồ chơi mô phỏng các nhân vật trong bộ phim hoạt hình nổi tiếng cùng tên, được phát sóng trên kênh truyền hình BIBI TV và SEE TV; hiện đã có mặt trên kênh Youtube MyKingdom. Sản phẩm đồ chơi cao cấp với nhiều ưu điểm:</li></ul><p>1. Phù hợp cho trẻ từ 3 tuổi.<br>2. Chất liệu nhựa cao cấp an toàn cho bé khi chơi.<br>3. Búp bê khớp ẩn bên trong, tạo sự tinh tế và chân thật.<br>4. Phụ kiện đi kèm đa dạng, phong phú, chia theo nhiều chủ đề khác nhau gần gũi với bé.<br>5. Đồ chơi mô phỏng cuộc sống, giúp bé phát triển kỹ năng mềm, kích thích sáng tạo và học hỏi thêm nhiều điều hay.</p></div></div></div><div class='content-heading'><h3 class='title text-uppercase'>Thông tin sản phẩm</h3></div><div class='data item content' id='additional' data-role='content'>    <div class='additional-attributes-wrapper table-wrapper'>        <table class='data table additional-attributes' id='product-attribute-specs-table'>            <caption class='table-caption'>Thêm thông tin</caption>            <tbody>                                                <tr>                        <th class='col label' scope='row'>Chủ đề</th>                        <td class='col data' data-th='Chủ đề'>ORI ACTIVITIES</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Xuất xứ</th>                        <td class='col data' data-th='Xuất xứ'>TRUNG QUỐC</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Mã VT</th>                        <td class='col data' data-th='Mã VT'>36311B-ORI</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Thương hiệu</th>                        <td class='col data' data-th='Thương hiệu'>ORI</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Xuất xứ thương hiệu</th>                        <td class='col data' data-th='Xuất xứ thương hiệu'>HONGKONG            </td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Tuổi</th>                        <td class='col data' data-th='Tuổi'>1-3 tuổi, 4-6 tuổi, 6-11 tuổi, 12 tuổi trở lên</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Giới tính</th>                        <td class='col data' data-th='Giới tính'>GIRL</td>                    </tr>                                        </tbody>        </table>    </div></div>",
    "3","1",['https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_2.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/h/q/hqdefault_12_38.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_1.jpg']
  ),new Product("ORI dã ngoại cùng cún Corgi",
    209000,
    299000,
    "ORI",
    "SKU36311B-ORI",
    "<div class='content-heading'><h3 class='title text-uppercase'>Mô tả sản phẩm</h3></div><div class='data item content' id='attributedescription'><div class='product attribute description'>    <div class='value'><h2>ORI ORI dã ngoại cùng cún Corgi 36311A-ORI</h2><p>Bé yêu thích thời trang và mơ ước sau này trở thành một nhà thiết kế thời trang nổi tiếng. Bé có rất nhiều ý tưởng nhưng không biết phải bắt đầu từ đâu. Hãy dành tặng bé búp bê Ori để giúp bé từng bước thực hiện ước mơ của mình mẹ nhé! Với cô búp bê này, bé có tha hồ sáng tạo những mẫu trang phục độc đáo theo phong cách của mình. Đồ chơi búp bê Ori lấy hình mẫu từ cô công chúa Ori xinh xắn, đáng yêu trong bộ phim hoạt hình nổi tiếng, với đôi mắt tròn, khuôn mặt bầu bĩnh, trang phục bắt mắt sẽ là người bạn thân thiết của các em nhỏ.<br>Giúp phát triển tư duy và khả năng sáng tạo của bé: Với cô búp bê Ori này, bé có thể thỏa sức tưởng tượng các kiểu dáng thời trang thú vị cho nàng búp bê, qua đó khả năng tư duy và óc sáng tạo của bé sẽ được phát huy tối đa, đồng thời giúp bé thật khéo tay khi làm những việc đòi hỏi sự khéo léo.</p><h3>Thông tin sản phẩm:</h3><p>Chất liệu an toàn: Búp bê được làm từ nhựa cao cấp không góc cạnh, không có chất độc hại, bảo đảm an toàn cho bé khi sử dụng.<br>Thiết kế sinh động, đáng yêu: Búp bê có những bộ quần áo rất xinh xắn và thời trang chắc chắn sẽ làm bé thích thú.<br>Có thể kết hợp với những trò chơi khác: Bé có thể chơi đồ hàng, đóng vai các nhân vật khác nhau để học cách quan tâm, chăm sóc người khác. Hay bé có thể chải tóc, trang điểm, cho búp bê Ori chơi cùng những nàng công chúa khác trong bộ sưu tập Búp bê Công chúa Ori. </p><ul><li>Xuất xứ thương hiệu: HONGKONG</li><li>Giới tính: Bé gái</li><li>Độ tuổi: 3 đến 9 tuổi</li><li>CÔNG CHÚA ORI là sản phẩm đồ chơi mô phỏng các nhân vật trong bộ phim hoạt hình nổi tiếng cùng tên, được phát sóng trên kênh truyền hình BIBI TV và SEE TV; hiện đã có mặt trên kênh Youtube MyKingdom. Sản phẩm đồ chơi cao cấp với nhiều ưu điểm:</li></ul><p>1. Phù hợp cho trẻ từ 3 tuổi.<br>2. Chất liệu nhựa cao cấp an toàn cho bé khi chơi.<br>3. Búp bê khớp ẩn bên trong, tạo sự tinh tế và chân thật.<br>4. Phụ kiện đi kèm đa dạng, phong phú, chia theo nhiều chủ đề khác nhau gần gũi với bé.<br>5. Đồ chơi mô phỏng cuộc sống, giúp bé phát triển kỹ năng mềm, kích thích sáng tạo và học hỏi thêm nhiều điều hay.</p></div></div></div><div class='content-heading'><h3 class='title text-uppercase'>Thông tin sản phẩm</h3></div><div class='data item content' id='additional' data-role='content'>    <div class='additional-attributes-wrapper table-wrapper'>        <table class='data table additional-attributes' id='product-attribute-specs-table'>            <caption class='table-caption'>Thêm thông tin</caption>            <tbody>                                                <tr>                        <th class='col label' scope='row'>Chủ đề</th>                        <td class='col data' data-th='Chủ đề'>ORI ACTIVITIES</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Xuất xứ</th>                        <td class='col data' data-th='Xuất xứ'>TRUNG QUỐC</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Mã VT</th>                        <td class='col data' data-th='Mã VT'>36311B-ORI</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Thương hiệu</th>                        <td class='col data' data-th='Thương hiệu'>ORI</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Xuất xứ thương hiệu</th>                        <td class='col data' data-th='Xuất xứ thương hiệu'>HONGKONG            </td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Tuổi</th>                        <td class='col data' data-th='Tuổi'>1-3 tuổi, 4-6 tuổi, 6-11 tuổi, 12 tuổi trở lên</td>                    </tr>                                                                <tr>                        <th class='col label' scope='row'>Giới tính</th>                        <td class='col data' data-th='Giới tính'>GIRL</td>                    </tr>                                        </tbody>        </table>    </div></div>",
    "3","1",['https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_2.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_1.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/h/q/hqdefault_12_38.jpg',
      'https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/ORI/36311B-ORI/36311B-ORI_1.jpg']
  )];
  constructor() { }

  ngOnInit(): void {
  }

}
