import $ from 'jquery';

const SkipToContent = () => {
  $('#homeSkipBtn').click(() => {
    $('#homeMainContent').focus();
  });

  $('#detailSkipBtn').click(() => {
    $('#detailMainContent').focus();
  });

  $('#favoriteSkipBtn').click(() => {
    $('#favoriteMainContent').focus();
  });
};

export default SkipToContent;
