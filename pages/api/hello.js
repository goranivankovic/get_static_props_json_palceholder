// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let hello =[{hello:'aa'},{heell:"bbbb"}]

export default async(req, res) => {
  res.status(200).json({msg:"hello next.js"})
}
