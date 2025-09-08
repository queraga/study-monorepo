const data = [
  "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg",
  "https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg",
  "https://fotogora.ru/img/blog/big/2019/12/3/15987.jpg",
  "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_rannej_vesnoj_v_lesu_ki200102.jpg",
];

const root = document.querySelector(".root");

const gallery = document.createElement("div");
gallery.className = "gallery";

const mainBox = document.createElement("div");
mainBox.className = "mainBox";

const pic = document.createElement("div");
pic.className = "pic";

const main = document.createElement("img");
mainBox.append(main);

gallery.append(mainBox, pic);
root.append(gallery);

const activePic = (index) => {
  pic.querySelectorAll("img").forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
  main.src = data[index];
  main.classList.add("main");
};

data.forEach((url, i) => {
  const thumb = document.createElement("img");
  thumb.src = url;
  thumb.className = "thumb";
  thumb.addEventListener("click", () => {
    activePic(i);
  });
  pic.append(thumb);
});

activePic(0);
