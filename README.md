# Drag-Memo
## 목차
[1. 프로젝트 소개](#프로젝트-소개)

[2. 프로젝트 기획](#프로젝트-기획)

[3. 기능](#기능)  

[4. 설치 방법](#설치-방법)  

[5. 기술 스택](#기술-스택)  

[6. 챌린지](#챌린지)
<br/>
<br/>

## 프로젝트 소개
Drag-Memo는 웹에서 드래그와 클릭만으로 메모가 가능한 크롬 확장 프로그램입니다.

<br/>
<br/>

## 프로젝트 기획
웹에서 학습을 하는 경우 한 번 본 경험으로는 잘 생각나지 않을 정도로 어려운 개념을 가지고 있는 단어가 등장하는 경우가 많습니다. 그리고 그 단어가 등장할 때마다 다시 알아보기 위해 재차 구글링을 합니다.
Drag-Memo는 앞서 말했던 상황이 발생했을 때 학습하는 사람의 시간을 낭비하지 않기 위해서 그리고 아무리 어려운 단어일지라도 해당 단어에 대해서 반복 노출되는 상황을 만들어 암기를 돕기 위해서 제작하였습니다.
<br/>
<br/>

## 기능

### [프로그램 설명 영상 보기](https://youtu.be/8-cDPv0-Brs)

<details>
<summary>Drag-Memo 크롬 익스텐션 설치 후 우측 상단 아이콘 클릭을 통해 로그인 가능</summary>

![login](https://user-images.githubusercontent.com/101804186/212551178-d4ddf0e7-ab80-4c34-8aa4-d2eee929fe44.gif)

</details>
<details>
<summary>일반 웹페이지 내에서 단어를 드래그 후 총 3가지 아이콘 등장</summary>

![threeTools](https://user-images.githubusercontent.com/101804186/212542074-0200b68f-95bc-4660-85fa-5d78229e0456.gif)

</details>

<details>
<summary>연필 아이콘 클릭: 해당 단어에 대한 데이터 생성 및 수정</summary>

![create](https://user-images.githubusercontent.com/101804186/212536503-ba6d3d19-9052-41fa-a0e1-5eede290a4e4.gif)

</details>

<details>
<summary>돋보기 아이콘 클릭: 해당 단어에 대한 데이터 불러오기</summary>

![get](https://user-images.githubusercontent.com/101804186/212541401-8865afac-ee18-450e-9dbd-31c111b05723.gif)

</details>
<details>
<summary>전구 아이콘 클릭: 페이지내에 저장된 단어 데이터가 존재한다면 해당 단어들 하이라이트 표시</summary>

![highlight](https://user-images.githubusercontent.com/101804186/212544137-82cfed88-c53a-4e44-b98f-2beb26dfb33a.gif)

</details>

<details>

<summary> https://www.hello-word.site 접속하여 단어 별도 추가 및 수정 가능</summary>

![page](https://user-images.githubusercontent.com/101804186/212543683-c99390c1-be70-4331-bd19-2065cc6f7976.gif)

</details>
<br/>

## 설치 방법

### [크롬 웹스토어에서 다운받아 바로 체험해보기](https://chrome.google.com/webstore/detail/drag-memo/ngkigmahhmigibddomcgdeifcdgfapdh?hl=ko&authuser=0)

<details>
<summary>
<span style="font-size:110%">직접 빌드하여 설치하기(열어서 보기)</span>
</summary>

다운로드를 위해, 아래 명령어를 터미널에 입력해주세요.

2.1 클론하여 빌드하기.
`git clone https://github.com/Sharpen-Cjh/hello-word-extension.git`

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
   `git clone https://github.com/Sharpen-Cjh/web-memo-frontend.git`  
   `npm install`
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

`npm start`

### Backend(Express).

1. 클론하여 빌드하기.  
   다운로드를 위해, 터미널에 아래명령어를 입력해주세요.  
   `https://github.com/Sharpen-Cjh/web-memo-backend.git`  
   `npm install`
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
<br/>

## 레포지토리 링크

### [Front-end](https://github.com/Sharpen-Cjh/Drag-Memo-Frontend)

### [Back-end](https://github.com/Sharpen-Cjh/Drag-Memo-Backend)
<br/>

## 기술 스택

1. Extension: Vanilla Javascript  

2. Frontend: React.js, Styled Component

3. Backend: Node.js, Express, MongoDB
<br/>

## 챌린지

### 옵저버 패턴 적용  

Drag-Memo는 웹에 접속한 사용자가 임의의 페이지에서 언제든지 자신이 원하는 메모 데이터를 불러올 수 있도록 하는 것을 목표로 제작되었습니다.  
    리액트를 사용하여 직접 구현한 페이지 내에서 컴포넌트를 통해 기능을 구현했던 이전 프로젝트들과 달리 이번에는 다른 사람의 페이지에 자바스크립트 코드를 주입하여 기능을 구현해야 했습니다.  
    페이지 내에서 어느 부분이 드래그 되고 있는지 지켜보고 있다가 사용자가 데이터를 원할 때 드래그 된 영역과 관련된 데이터를 전달해 주고 보여주는 것이 핵심 기능이었습니다. 리액트를 사용했다면 리액트 훅을 이용해 state를 관리하고 컴포넌트를 렌더링 했겠지만 바닐라 자바스크립트만을 이용해야 됐기 때문에 구조와 설계에 대한 필요성을 느껴 디자인 패턴을 찾아보게 되었습니다.  
    옵저버 패턴에 대하여 짧게 요약하자면 객체 상태를 감시하고 있다가 변화가 있을 시 이를 등록된 옵저버에게 전달하고 옵저버는 전달받은 변화 내용을 바탕으로 후속 작업을 진행하는 디자인 패턴입니다.  
    따라서 옵저버 패턴을 적용해 컴포넌트를 옵저버에 등록했고 드래그 영역 변화가 있을 때 마다 컴포넌트에 전달해 등록된 메서드로 렌더링 시키는 방향으로 작업하였습니다.  
    
<img width="758" alt="옵저버 패턴" src="https://user-images.githubusercontent.com/101804186/215388910-789390b9-76d0-4d25-b51a-c02eb1c5dc37.png">
    
디자인 패턴을 적용하며 코드에 대한 흐름 파악, 가독성, 재사용성이 개선되는 모습을 보며 구조화된 코드의 중요성을 직접 깨닫는 시간이었습니다.

### 저장된 단어 하이라이트 효과  

페이지 내에 텍스트를 innerHTML을 이용하여 전부 문자열로 변경한 후 indexOf로 사용자 데이터에 저장된 단어와 값이 같은 텍스트의 index를 파악하고 해당 위치에 하이라이트 효과를 가진 span 태그로 해당 단어를 감싸주는 방법으로 초기 구상 및 검증을 진행하였습니다.
```
    <div>강아지</div>  ->  <div><span class="highlight">강아지</span></div>
```  
    
하지만 개발 단계에서는 아래와 같이 하이라이트 대상 단어를 감싸는 것이 아니라 대상 단어를 포함한 태그 안으로 삽입되는 이슈가 발생했습니다.
    
```
    <div id="강아지">강아지</div>  ->  <div id="<span class="highlight">강아지</span>">강아지</div>
```

   단순히 태그를 삽입하는 기존 방법을 이용해서는 해당 이슈를 해결할 수 없다고 생각 되었고, 페이지 내에서 값이 일치하는 텍스트의 절대 좌표를 구해야 해결이 가능하다고 판단 되었습니다. 절대 좌표를 구하기 위해서 node들을 재귀적으로 탐색하며 text node들만 전부 추출하였고, 사용자 데이터와 비교하여 값이 일치하는 텍스트 노드의 절대 좌표를 구한 뒤, 해당 좌표에 별도의 하이라이트 박스를 렌더링 시켜주었습니다.

   이번 경험을 통해 구체적이고 다양한 PoC 검증의 중요성을 깨달았고, 다양한 사이트의 DOM 노드들의 구조와 프로퍼티를 학습할 수 있는 좋은 시간이었습니다.

### 툴 박스, 메모장 렌더링
   텍스트를 마우스로 드래그 후 렌더링 되는 툴박스와 메모장을 어떤 방법으로 구현해야 자연스러울지 고민하였습니다. 처음에는 드래그 된 DOM element의 위치 값을 얻을 수 있는 window.getSelection()를 이용하려 했습니다. 해당 메서드는 Offset, Client 등의 좌표를 제공하지만 parentElement 기준으로 제공되기 때문에 자연스러운 위치에 렌더링 되지 않았습니다.

   생각을 전환하여 드래그 된 DOM element의 위치가 아닌 드래그가 끝나는 순간 mouseup 이벤트를 감지하여 마우스의 page 좌표 값을 이용하여 렌더링 하였습니다. 오히려 좌표 위치도 특별한 계산식이 필요 
   없었고 보다 자연스러운 위치에 간단하게 구현되었습니다.

   기능 구현시 한 방향으로 몰입하는 것도 중요하지만, 때로는 한 발짝 물러서서 유연하게 생각해 보는 것도 중요하다는 것을 배웠습니다.
