import server from  "./App";

import './bootstrap'


server.listen(process.env.PORT, ()=>{
  console.log(`🚀  Server ready at ${process.env.URL} ⚡🔥`);
});
