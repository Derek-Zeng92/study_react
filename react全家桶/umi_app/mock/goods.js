let data = [
  {
    title:'web全栈课7777'
  },
  {
    title:"python全栈课"
  }
]

export default {
  "get /api/goods":function(req,res) {
    setTimeout(() => {
      res.json({result:data})
    }, 1000);
  }
}