// 검색창 포커스 이벤트
const searchEle = document.querySelector('.search');
const searchInputEle = searchEle.querySelector('input');

searchEle.addEventListener('click', function () {
  searchInputEle.focus();
});

searchInputEle.addEventListener('focus', function () {
  searchEle.classList.add('focused');
  searchInputEle.setAttribute('placeholder', '통합검색');
});

searchInputEle.addEventListener('blur', function () {
  searchEle.classList.remove('focused');
  searchInputEle.setAttribute('placeholder', '');
});

// 오른쪽 배너 스크롤 이벤트
const badgeEle = document.querySelector('header .badges');

// lodash _.throttle 사용 -> 첫번째 인수로는 실행시키고자 하는 함수, 두번재 인수로는 시간
window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (window.scrollY > 500) {
      // 이벤트 배너 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEle, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      // badgeEle.style.display = 'block';
      gsap.to(badgeEle, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);
