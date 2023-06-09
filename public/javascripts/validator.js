function Validator(formSelector) {
  function getParent(el, selector) {
    while (el.parentElement) {
      if (el.parentElement.matches(selector)) {
      }
    }
  }
  const formRules = {};
  const validatorRules = {
    required: function (value) {
      return value ? undefined : "Vui lòng nhập trường này";
    },
    email: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Vui lòng nhập email";
    },
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : `Vui lòng nhập tối thiểu ${min} kí tự`;
      };
    },
  };
  // Lấy ra form Element trong DOM theo 'formSelector'
  const formElement = document.querySelector(formSelector);

  // Chỉ xử lý khi có element trong DOM
  if (formElement) {
    const inputs = formElement.querySelectorAll("[name][rules]");
    for (const input of inputs) {
      const rules = input.getAttribute("rules").split("|");
      for (let rule of rules) {
        let isRuleHasValue = rule.includes(":");
        let ruleInfo;
        if (isRuleHasValue) {
          ruleInfo = rule.split(":");
          rule = ruleInfo[0];
        }
        // console.log(rule);

        let ruleFunc = validatorRules[rule];

        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1]);
        }

        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          formRules[input.name] = [ruleFunc];
        }
      }

      input.onblur = handleValidate;
    }
    // Hàm thực hiện Validate
    function handleValidate(e) {
      var rules = formRules[e.target.name];
      var errorMessage;
      rules.some(function (rule) {
        errorMessage = rule(e.target.value);
        return errorMessage;
      });

      // ! Nếu có lỗi thì hiển thị message lỗi ra UI
      if (errorMessage) {
        getParent(e.target, "form-group-account");
      }
    }
  }
}
