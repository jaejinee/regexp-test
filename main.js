let str = `
010-1234-5678
the012h2ll@gmail.com
https://fastcampus.co.kr/courses/203720/clips/
The quick brwon fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
백두산이_마르고 닳도록
`


console.log(
  str.match(/(?<=@).{1,}/g)
  )
