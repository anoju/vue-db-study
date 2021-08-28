# vue-db-study

> VUE 공식 사이트   
> https://vuejs.org/

> VUE란? (대충 구글링한거 넣은거임..)   
> https://kr.vuejs.org/v2/guide/index.html   
> https://wikidocs.net/17701

------------

## 준비물 + 사전준비사항

준비물은.. 개인 노트북(필수)!! 보는걸로 다 알수있으면 패스(그럼 필수가 아닌가? ;;;)   
어렵더라도 포기하지않을 정신력!!   
   
그리고 스터디의 기대감은 집에 놓고 오시길.....   
첫실무때 헤매지 않을정도로만 해보자 입니다.   
물론 프로젝트마다 환경이 조금씩 다를수 잇습니다.   
이점도 유의하시길~~~

#### 사용할에디터: vscode
https://code.visualstudio.com/

#### vscode 확장프로그램
1. vetur (필수)   
https://marketplace.visualstudio.com/items?itemName=octref.vetur
2. prettier (필수)   
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
3. eslint (필수)   
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
4. git-graph (선택)   
https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph
```
vscode에서 eslint 설치후 첫실행때 실행여부를 물어보면 꼭 수락[allow]해야합니다.
```

#### 크롬 확장프로그램
1. Vue.js devtools (선택)   
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=ko

#### 형상관리: git
https://git-scm.com/
```
사전에 저장소에 push 및 pull 테스트를 하고오면 시간 절약을 할수 있어서 좋아요!!
```

#### node 설치
https://nodejs.org/ko/

> yarn도 추가설치하면 좋음(안해도 무방)   
> https://yarnpkg.com/
```
기존의 설치된분은 기왕이면 최신버전으로 UP해주세요(안해도 무방)
```

## 참고사항

저장소 루트폴더가 작업폴더가 아니라   
그 바로 아래 (이니셜등을 이용한) 각자 폴더를 만들어   
각자 작업한 소스를 올릴것입니다.   
그 각자 생성한 폴더를 루트 폴더로 사용할거며   
그 폴더를 vscode로 열어야 합니다.   
   
이래야 작업하다가 막힐때 다른분들이 그 소스를 볼수 있을거같기도 하고오면   
비교도 용의할거 같습니다. (이부분에서 겁먹진 마시길 ㅋ)   
   
각자의 폴더를 생성할때는 이니셜이나 아이디등 각자 알아서
폴더를 생성하시고 'webpack-init' 폴더안에 있는 파일을 복사해서 옮겨넣습니다.
복사해서 옮길때는 (node_modules폴더가 있따면) node_modules 폴더는 제외~!
옮긴후   

> npm i   
> npm 설치가 끝나면
> npm run dev 또는 yarn dev   
> 그러면 실행 끝

실행하면 됩니다.
   
PS. vue init 해서 새로 vue 플젝 만들었더니.. 구조가 약간 이전플젝이랑 좀 다르네요...   
   
# 그럼 모두 화이팅!!!