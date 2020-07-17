$("#red-container").hover(
  function () {
    $("#red").animate({ top: 0 }, 500);
  },
  function () {
    $("#red").animate({ top: "250" }, 500);
  }
);

$("#anova-container").hover(
  function () {
    $("#anova").animate({ top: 0 }, 500);
  },
  function () {
    $("#anova").animate({ top: "250" }, 500);
  }
);

$("#energy-container").hover(
  function () {
    $("#energy").animate({ top: 0 }, 500);
  },
  function () {
    $("#energy").animate({ top: "250" }, 500);
  }
);

$("#boba-container").hover(
  function () {
    $("#boba").animate({ top: 0 }, 500);
  },
  function () {
    $("#boba").animate({ top: "250" }, 500);
  }
);

$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* Check the location of each desired element */
    $(".hidden").each(function (i) {
      var top_of_object = $(this).offset().top;

      if (bottom_of_window > top_of_object) {
        $(this).addClass("fade-in");
      }
    });

    var top_of_experience = $("#experience").offset().top;
    var top_of_projects = $("#projects").offset().top;
    var top_of_skills = $("#skills").offset().top;
    var top_of_about_me = $("#about-me").offset().top;
    if (bottom_of_window > top_of_about_me) {
      $("#experience-btn").removeClass("bolded");
      $("#projects-btn").removeClass("bolded");
      $("#skills-btn").removeClass("bolded");
      $("#about-me-btn").addClass("bolded");
    } else if (bottom_of_window > top_of_skills) {
      $("#experience-btn").removeClass("bolded");
      $("#projects-btn").removeClass("bolded");
      $("#skills-btn").addClass("bolded");
      $("#about-me-btn").removeClass("bolded");
    } else if (bottom_of_window > top_of_projects) {
      $("#experience-btn").removeClass("bolded");
      $("#projects-btn").addClass("bolded");
      $("#skills-btn").removeClass("bolded");
      $("#about-me-btn").removeClass("bolded");
    } else if (bottom_of_window > top_of_experience) {
      $("#experience-btn").addClass("bolded");
      $("#projects-btn").removeClass("bolded");
      $("#skills-btn").removeClass("bolded");
      $("#about-me-btn").removeClass("bolded");
    } else {
      $("#experience-btn").removeClass("bolded");
      $("#projects-btn").removeClass("bolded");
      $("#skills-btn").removeClass("bolded");
      $("#about-me-btn").removeClass("bolded");
    }
  });
});

$("#laptop").click(function () {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

$("#arrow").click(function () {
  document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
});

$("#experience-btn").click(function () {
  document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
});

$("#projects-btn").click(function () {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

$("#skills-btn").click(function () {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

$("#about-me-btn").click(function () {
  document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
});
