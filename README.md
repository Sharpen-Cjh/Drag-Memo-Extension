# hello-word

## hello-word는 자신만의 단어 저장소를 만들 수 있는 크롬 확장 프로그램입니다.

### [프로그램 시연영상](https://www.youtube.com/watch?v=jnf0p65iNn4)
<details>
<summary>
기능 
</summary>

1. hello-word 크롬 익스텐션 설치 후 우측 상단 아이콘 클릭을 통해 로그인 가능<img width="1436" alt="스크린샷 2022-12-14 오전 8 57 07" src="https://user-images.githubusercontent.com/101804186/207471178-8ce2a5c7-1e47-4f43-805e-7a58258ea877.png">


2. 일반 웹페이지 내에서 단어를 드래그 후 총 3가지 아이콘 등장  
      <img width="424" alt="스크린샷 2022-12-14 오전 8 54 36" src="https://user-images.githubusercontent.com/101804186/207470706-d4c81235-baed-4f61-9de7-b38a312f8983.png">


- 돋보기 아이콘 클릭: 해당 단어에 대한 데이터 불러오기

- 연필 아이콘 클릭: 해당 단어에 대한 데이터 생성 및 수정

- 전구 아이콘 클릭: 페이지내에 저장된 단어 데이터가 존재한다면 해당 단어들 하이라이트 표시<img width="538" alt="스크린샷 2022-12-14 오전 9 02 38" src="https://user-images.githubusercontent.com/101804186/207471636-fc7a2410-6527-47ad-8017-265f7fa62f9e.png">


3. [hello-word.site](https://www.hello-word.site/)로 접속하여 단어 별도 추가 및 수정 가능.
</details>

### 설치방법
### Extension
1. 크롬 웹스토어에서 다운.
   [다운로드 링크](https://chrome.google.com/webstore/detail/hello-word/pegeamjammjhpgdddkbbpfodepbflnfn/related?hl=ko&authuser=0)
<details>
<summary>
2. 직접 빌드하여 설치하기.  
</summary>

다운로드를 위해, 아래 명령어를 터미널에 입력해주세요.

2.1 클론하여 빌드하기. 
```git clone https://github.com/Sharpen-Cjh/hello-word-extension.git``` 
```
cd hello-word
npm install
npm run build
```
hello-word 디렉토리에 소스코드가 빌드된 dist 폴더가 생성됩니다.

2.2 크롬 브라우저에서 확장프로그램 로드
크롬 브라우저를 열고 chrome://extensions/에 접속합니다.
<img width="1440" alt="스크린샷 2022-12-14 오전 8 15 04" src="https://user-images.githubusercontent.com/101804186/207465613-bbeba21e-1fb7-48d1-9641-3ddfb4bcd2c3.png">  
2.3 우측 상단에 개발자 모드를 켭니다.  
<img width="419" alt="스크린샷 2022-12-14 오전 8 16 47" src="https://user-images.githubusercontent.com/101804186/207465805-91d52384-f212-4a17-a5ab-aae9e800d791.png">.  
2.4 좌측 상단에 압축 해제된 확장 프로그램을 로드합니다 버튼을 클릭합니다.   
2.5 이전 과정에서 생성된 dist폴더를 선택하여 설치합니다.   
```
"oauth2": {
    "client_id": "YOUR CLIENT ID",
  },
```
2.6 본인의 구글 클라우드 플랫폼 프로젝트 아이디와 Oauth2키를 dist폴더 안에 있는 manifest.json 파일에 입력합니다.  
```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```
2.7 디렉토리 root 위치에 .env 파일을 생성하여 환경설정을 입력합니다.  
### FrontEnd
1. 클론하여 빌드하기.  
다운로드를 위해, 터미널에 아래명령어를 입력해주세요.    
```git clone https://github.com/Sharpen-Cjh/web-memo-frontend.git```  
```npm install```  
2. 디렉토리 root 위치에 .env 파일을 생성하여 환경설정을 입력합니다.  
```
REACT_APP_BACK_URL=

REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
``` 
```npm start```  
### Backend(Express). 
1. 클론하여 빌드하기.  
다운로드를 위해, 터미널에 아래명령어를 입력해주세요.  
```https://github.com/Sharpen-Cjh/web-memo-backend.git```  
```npm install```  
2. 디렉토리 root 위치에 .env 파일을 생성하여 환경설정을 입력합니다.
```
MONGO_DB=

FIREBASE_SERVICE_TYPE=
FIREBASE_SERVICE_PROJECT_ID=
FIREBASE_SERVICE_PRIVATE_KEY_ID=
FIREBASE_SERVICE_PRIVATE_KEY=
FIREBASE_SERVICE_CLIENT_EMAIL=
FIREBASE_SERVICE_CLIENT_ID=
FIREBASE_SERVICE_AUTH_URI=
FIREBASE_SERVICE_TOKEN_URI=
FIREBASE_SERVICE_AUTH_PROVIDER_URL=
FIREBASE_SERVICE_CLIENT_URL=
```
</details>

### 제작 동기

웹 페이지 내에서 이미 학습했지만 기억나지 않는 단어 등장시 해당 단어에 대하여 다시 구글링 하는 시간을 단축 시키기 위하여 제작.

### 기술 스택

1. Extension: Vanilla Javascript

2. Frontend: React.js

3. Backend: Node.js, Express, MongoDB

### Challenge

1. 툴 박스, 메모장 렌더링

   어려웠던 점: 텍스트를 마우스로 드래그 후 렌더링 되는 아이콘과 메모장을 어떤 방법으로 구현해야 자연스러울지 고민하였습니다. 처음에는 드래그 된 DOM element의 위치 값을 얻을 수 있는 window.getSelection()를 이용하려 했습니다. 해당 메서드는 Offset, Client 등의 좌표를 제공하지만 parentElement 기준으로 제공되기 때문에 정확히 드래그 된 영역의 위치를 구하기 위해서는 복잡한 계산식이 필요했고 많은 시간을 소모하였지만 자연스러운 위치에 렌더링 되지 않았습니다.

   구현 방법: 드래그 된 DOM element의 위치가 아닌 드래그가 끝났을 때 마우스 포인터의 위치를 이용.
   생각을 전환하여 드래그가 끝나는 순간, 즉 mouseup 이벤트가 발생했을 때의 마우스의 page 좌표 값을 이용하여 렌더링 하였습니다. 오히려 좌표 위치도 특별한 계산식이 필요 없었고 보다 자연스러운 위치에 더 간단하게 구현되었습니다.

   느낀 점: 기능 구현 시 한 방향으로 몰입하는 것도 중요하지만, 때로는 한 발짝 물러서서 유연하게 생각해 보는 것도 중요하다는 것을 배웠습니다.

2. 저장된 단어 하이라이트 효과

   어려웠던 점: 처음에는 Document.body.innerHTML안에 데이터에 저장해놓은 단어와 같은 텍스트의 index값을 찾은 후 하이라이트 속성을 가진 span태그를 덮어주는 방법으로 진행하였고 문제가 없어 보였습니다. 하지만 태그들이 깨지는 문제가 발생하였습니다. 예로 들면 저장해놓은 단어가 HTML이고 innerHTML에
   `<a href=HTML >HTML</a>` 가 존재한다고 가정할 때 `<a href=<span>HTML</span>>HTML</a>`와 같이 태그안에 태그가 들어가버리는 오류가 발생했습니다. 심각한 버그이고 다른 방법은 생각해보지 못했기 때문에 굉장히 당황스러웠습니다.

   구현 방법: 결과부터 말씀드리자면 이전에는 해당 단어의 직접 태그를 덮어씌었다면 이번에는 단어의 위치값만 구한 후 단어 위에 추가 컴포넌트를 렌더링 해주었습니다. 우선 동일한 방법으로 저장된 단어의 index값을 찾은 후에 새로운 range값을 생성했습니다. 그리고 range.getClientRects()를 이용해 단어들의 좌표값을 구하고 하이라이트 div태그를 만들어 단어위에 렌더링 해주는 방법을 이용했습니다.

   느낀점: 가장 기본이고 단순하게 느꼈던 DOM element의 이렇게 많고 다양한 메서드들과 속성이 존재한다는 것을 직접 깨닫고 어떤 버그나 문제가 발생하더라도 다양한 메서드를 사용하여 해결할 수 있겠구나라는 생각이 들었고, 저도 언젠가는 다른 개발자들이 겪고있는 문제를 해결할 수 있는 메서드를 제작해보고 싶다는 생각이 들었습니다.
