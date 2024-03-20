


Kullanılan kitaplik = react-icons

Kullanılan araçlar = 

1-useState Hook = Functional componentler de state(değişken)'i takip etmemize olanak tanır.
const[state, setState] = useState();
state : değişkenin mevcut durumunu temsil eder.
setState : değişkenin mevcut durumunu günceller.

2-useEffect Hook =  Bu fonksiyon  component’in mount, update veya unmount durumlarında işlemleri gerçekleştirmek için kullanılır. Yani useEffect React component’inin yaşam döngüsü boyunca belirli işlemleri takip etmek ve gerçekleştirmek için kullanılır.


3-useRef Hook = Render için gerekli olmayan bir değere referans vermesini sağlayan bir React Hooktur.Bir DOM ögesine erişmenin ve onunla etkileşime girmenin veya işlemler arasında değerleri kalıcı kılmanın ve gereksiz re-render işlemlerden kaçınmamızı sağlar.


Projenin Uygulanması : 

-App.js'in içinde TodoList componenti çağrılır.Ekranda görüntülenecek componenttir.
-TodoList componenti içinde useState hook ile todos değişkeni tanımlanmıştır.Uygulama içinde todo state'ini takip edebilir hale gelmiştir.
Ayrıca todo ile ilgili  addTodo fonksiyonu  TodoForm componentine, todos state'i, completeTodo , removeTodo ve updatedTodos fonksiyonları tanımlanmış ve Todo componentine props olarak iletilmiştir.Props olarak iletilmesi diğer componentleri içinde bu değişkenleri kullanabileceğimiz anlamına gelir.

-TodoForm componenti iletilen addTodo propsunu alarak form taginin onSubmit event'inde tetiklenerek yeni bir todo nesnesi oluşturur.
State değişkeni olarak tanımlanan inputValue kullanıcıdan alınan bilgilerin tutulmasını sağlar.

-Todo componenti TodoList componentinten iletilen propsları alır.Todo arrayinde ki her bir obje için removeTodo ve updatedTodo fonksiyonlarını kullanarak kullanıcının silme ve güncelleme işlevselliklerinin uygulamasını sağlar.