import $ from 'jquery';
import CONFIG from '../globals/config';

const ReviewFormInitiator = (restaurantId) => {
  $('#formContainer').append(`
    <button id="openFormButton" type="button" class="open-form-btn">Ulasan</button>
    <form id="reviewForm" class="review-form">
      <input name="id" id="id" value="${restaurantId}" type="hidden">
      <input name="name" id="name" type="text" placeholder="nama kamu">
      <input name="review" id="review" type="text" placeholder="ulasan kamu mengenai restauran ini ...">
      <button type="submit" class="submit-form-btn">Kirim Ulasan</button>
    </form>
  `);

  $('#openFormButton').click(() => {
    $('#formContainer').toggleClass('open');
    $('#reviewForm').toggleClass('open');
    $('#openFormButton').toggleClass('open');
  });

  async function submitForm({ id, name, review }) {
    const response = await fetch(`${CONFIG.BASE_URL}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return { error: true };
    }

    return { error: false };
  }

  $('#reviewForm').submit((e) => {
    e.preventDefault();

    const id = $('#id').val();
    const name = $('#name').val();
    const review = $('#review').val();

    submitForm({ id, name, review });

    $('#name').val('');
    $('#review').val('');
  });
};

export default ReviewFormInitiator;
