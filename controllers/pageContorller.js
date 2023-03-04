const getIndexPage= (req,res) => {
  res.render("index",{
    link:'index',
  });
}
const getAboutPage=(req,res) => {
  res.render("about",{
    link:'about',
  });
}
const getRegisterPage=(req,res) => {
  res.render("register",{
    link:'register',
  });
}

export{getIndexPage,getAboutPage,getRegisterPage}  
// ! farklı dosyalarda çağırmak için export etmemiz gerekiyor. Burada obje olarak export ettik