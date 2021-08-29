# vue-db-study
   
> VUE 공식 사이트   
> https://vuejs.org/
   
> VUE란? (대충 구글링한거 넣은거임..)   
> https://kr.vuejs.org/v2/guide/index.html   
> https://wikidocs.net/17701
   
## 준비물 + 사전준비사항

준비물은.. 개인 노트북(필수)!!   
보는걸로 다 알수있으면 패스(그럼 필수가 아닌가? ;;;)   
어렵더라도 포기하지않을 정신력!!   
   
그리고 스터디의 기대감은 집에 놓고 오시길.....   
첫실무때 헤매지 않을정도로만 해보자 입니다.   
물론 프로젝트마다 환경이 조금씩 다를수 잇습니다.   
이점도 유의하시길~~~

### 사용할에디터: vscode
https://code.visualstudio.com/

### vscode 확장프로그램
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

### 크롬 확장프로그램
1. Vue.js devtools (선택)   
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=ko

### git (형상관리)
https://git-scm.com/
```
사전에 저장소에 push 및 pull 테스트를 하고오면 시간 절약을 할수 있어서 좋아요!!
```

### git 관리 툴

저는 vscode에 자체 기능을 이용해서 git을 push 및 pull 을 합니다. (명령어 아님)   
그게 프로그램도 덜 띄우고 오히려 좋은거 같아요~   
(그래서 git-graph도 설치하는거임)
하지만 그게 힘든 사람도 있을수 있으니...
   
1. 소스트리   
https://www.sourcetreeapp.com/   
초창기때 명령어가 익숙치 않아서 사용하던분들이 현재까지도 많이 씁니다. 물론 저도 썻었음   

2. gitkraken   
https://www.gitkraken.com/   
같이 플젝하던 개발자가 쓰는걸 보고 알았습니다.   
디자인이 더 프로페셔널(?)하고 UI가 먼가 더 좋아보이며 기능이 많아보입니다.   
자세한건... 저도 아직 안써봄; ㅋㅋㅋ   

3. tortoisegit(일명 거북이git)    
https://tortoisegit.org/   
이게 편한분도 있겠지만..   
갠적으로 이걸쓸바엔...차라리 vscode기능을 쓰는게 나을듯 ㅋㅋ   
### node 설치
https://nodejs.org/ko/

> yarn도 추가설치하면 좋음(안해도 무방)   
> https://yarnpkg.com/
```
기존의 설치된분은 기왕이면 최신버전으로 UP해주세요(안해도 무방)
```

## CSS전처리기 : SCSS
공식 사이트   
https://sass-lang.com/   
   
한글 사이트(아마 비공식? 꾸준히 업뎃하는지는 모르겟음)   
https://sass-guidelin.es/ko/

SCSS란?(이것도 대충 구글링..)   
https://yunzema.tistory.com/269   
   
언제부터인가 전 SCSS 찬양자가 되었습니다.   
왜냐하면 autoprefixer 때문에...   
최대한 한줄이라도 덜 적는게 얼마나 편하던지....   
   
VUE 플젝에서 SCSS가 필수는 아니지만    
(일반 CSS 및 LESS, Stylus, PostCSS 등 다른것도 사용가능)   
이제까지 참여했던 VUE 플젝에서는 모두 SCSS를 사용했습니다.   
   
예전에 vue init 해서 만들때 scss 사용여부를 물었던거 같았는데..   
어디서 잘못된건지 지금은 안물어보고 PostCSS만 세팅되어 있어서   
scss는 추가설치했습니다.   
이과정에서 최신버전이랑 호환이 안되서....    
몇번이나 지웠다가... 버전 내려서 재설치하고....    
이 과정을 몇번이나 반복 함...   
   
일반 html코딩 플젝에서도 이제 저는 SCSS를 사용하려고 하는데   
그때 구지 복잡하게 gulp를 세팅하진 않습니다.    
강려크한 vscode 확장프로그램이 있기때문에~~   
   
Live Server까지 잇으면 금상첨화~~~   

1. Live Sass Compiler   
https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass   
SCSS파일 변화를 감지하여 css파일로 바로 컴파일 함
설정을 통한 컴파일 방식 및 위치를 설정가능
2. Live Server
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer   
가상서버로 현재 코딩하고 잇는 html를 볼수있으며   
(그래서 모바일에서 확인도 쉬움)
html 및 CSS 변화를 감지하여 브라우저를 자동 새로고침 해줌

## 진행방법 및 참고사항

저장소 루트폴더가 작업폴더가 아니라   
그 바로 아래 (이니셜등을 이용한) 각자 폴더를 만들어   
각자 작업한 소스를 올릴것입니다.   
그 각자 생성한 폴더를 루트 폴더로 사용할거며   
그 폴더를 vscode로 열어야 합니다.   
   
이래야 작업하다가 막힐때 다른분들이 그 소스를 볼수 있을거같기도 하고오면   
비교도 용의할거 같습니다. (이부분에서 겁먹진 마시길 ㅋ)   
   
각자의 폴더를 생성할때는 이니셜이나 아이디등 각자 알아서
폴더를 생성하시고 'webpack-init' 폴더안에 있는 파일을 복사해서 옮겨넣습니다.
복사해서 옮길때는 (node_modules폴더가 있다면) node_modules 폴더는 제외~!
옮긴후   

> npm i   
> npm 설치가 끝나면   
> npm run dev 또는 yarn dev   

그러면 실행 끝!!!
   
vue init 해서 새로 vue 플젝 만들었더니..   
구조가 약간 이전플젝이랑 좀 다르네요...   
(vue cli 버전업에 따라 바뀐거 같은데...) 
여기에 따른 (제가) 혼돈이 올 수도 잇음   

# 기타 참고
1. NUXT(넉스트)   
공식 사이트: https://nuxtjs.org/   
타블로그 설명: https://adrian0220.tistory.com/193
vue 기반의 좀더 보완된 프레임웤이라고 해야하나...?   
지금 진행하고 있는 VUE플젝이 NUXT 플젝인데....   
어디 설정이 잘못되었는지 훨씬 무거웠음....   
퍼블입장만에서만 따지만 구지 NUXT를 써야되나싶음...    
근데 여기저기서 많이 쓰는거 같음   
사실 이거에 대한 (프레임웤)결정권은 퍼블에게 없음   
이번 진행시 여유되면 NUXT 플젝도 함 해볼까 하는데...    
리딩안하는 일반 vue플젝이나 NUXT플젝이나 작업자포지션에서는 크게 차이는 없음...   
내가 느낀 NUXT의 장점은   
파일 추가할때 router에 따로 등록을 안하고 해당경로로 접속하면 바로 페이지 확인이 가능하지만,   
있던 vue파일을 지우면 바로 에러남;;;   
특히 새파일을 만들때 기존 vue파일 복붙하고 파일 이름을 바꾸면 에러떨어짐;;;
   
2.  vuetify(뷰티파이)   
공식사이트: https://vuetifyjs.com/en/   
VUE계의 부트스트랩이라고 생각하면 됨   
잘 만들었고 기능은 강력하나... 난 부트스트랩을 좋아하지않듯이 뷰티파이도 좋아하지않음   
지금 진행하고 있는 VUE플젝이 NUXT도 쓰지만 뷰티파이도 쓰고 잇음!   
기능을 일일히 공식사이트에서 뒤져봐야해서 아주 번거로움ㅋㅋ(차라리 그냥 만들고 말지)   
   
3. svelte(스벨트)   
공식사이트: https://svelte.dev/   
vue 다음으로 새로 나온 프레임웤.. 좀 검색해보니 vue보단 리액트를 대체할것인지 이야기를 많이함   
아직은 한국에서도 활성화가 될지는 미지수~
최후발주자이다보니 관련정보가 많이 없음   
https://www.inflearn.com/course/%EC%8A%A4%EB%B2%A8%ED%8A%B8-%EC%9E%85%EB%AC%B8-%EA%B0%80%EC%9D%B4%EB%93%9C   
인프런에 입문 무료강의가 있으니 참고!!

# 그럼 모두 화이팅!!!