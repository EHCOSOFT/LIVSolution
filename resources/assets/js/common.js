$(document).ready(function () {
    $('.accordion-header').click(function () {
        const $accordionContent = $(this).next('.accordion-content');

        if ($accordionContent.is(':visible')) {
            $accordionContent.slideUp(300, function () {
                $accordionContent.css('display', ''); 
                $accordionContent.removeClass('active');
            });

            $(this).removeClass('active');
        } else {
            $accordionContent.css('display', 'flex').hide().slideDown(300, function () {
                $accordionContent.addClass('active');
            });

            $(this).addClass('active');
        }

    });

    $('.custom-accordion-header').click(function () {
        const $accordionContent = $(this).next('.custom-accordion-content');
    
        if ($accordionContent.is(':visible')) {
            $accordionContent.slideUp(300, function () {
                $accordionContent.css('display', ''); 
                $accordionContent.removeClass('active');
            });
    
            $(this).removeClass('active');
        } else {
            $accordionContent.css('display', 'flex').hide().slideDown(300, function () {
                $accordionContent.addClass('active');
            });
    
            $(this).addClass('active');
        }
    });

    $('.tab').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tab').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

    $('.custom-tab').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.custom-tab').removeClass('active');
        $('.custom-tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

    $('.range-group input').on('input', function() {
        const value = $(this).val();
        const max = $(this).attr('max');
        const percentage = (value / max) * 100;

        $(this).css('background', `linear-gradient(to right, var(--primary-60) ${percentage}%, var(--shark-10) ${percentage}%)`);
    });

    $('.btn-open').click(function () {
        $(this).toggleClass('active');
        $('.table-wrap').toggleClass('active');
    });

    $('.btn-search').click(function () {
        $('.search-group').toggleClass('active');
    });

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        $("body").css("overflow", "hidden");
        // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
    });

    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .modal-wrap").click(function () {
        $(".modal-wrap").removeClass("active");
        $("body").css("overflow", "auto");
        // window.removeEventListener("wheel", removeDefaultEvent);
    });

    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });
});