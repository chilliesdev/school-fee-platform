(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/react-hook-form/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.js ***!
  \********************************************************/
/*! exports provided: Controller, FormProvider, appendErrors, get, transformToNestObject, useFieldArray, useForm, useFormContext, useWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return FormProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendErrors", function() { return appendErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToNestObject", function() { return transformToNestObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldArray", function() { return useFieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWatch", function() { return useWatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isHTMLElement = (value) => value instanceof HTMLElement;

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    all: 'all',
};
const VALUE = 'value';
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners({ ref }, shouldAttachChangeEvent, handleChange) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isNullOrUndefined = (value) => value == null;

var isArray = (value) => Array.isArray(value);

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);

var isKey = (value) => !isArray(value) &&
    (/^\w*$/.test(value) ||
        !/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(value));

var stringToPath = (input) => {
    const result = [];
    input.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, (match, mathNumber, mathQuote, originalString) => {
        result.push(mathQuote
            ? originalString.replace(/\\(\\)?/g, '$1')
            : mathNumber || match);
    });
    return result;
};

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data) => Object.entries(data).reduce((previous, [key, value]) => {
    if (!isKey(key)) {
        set(previous, key, value);
        return previous;
    }
    return Object.assign(Object.assign({}, previous), { [key]: value });
}, {});

var isUndefined = (val) => val === undefined;

var unique = (value) => value.filter(Boolean);

var get = (obj, path, defaultValue) => {
    const result = unique(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus) {
                    field.ref.focus();
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isRadioInput = (element) => element.type === 'radio';

var isFileInput = (element) => element.type === 'file';

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || value === ''
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fieldsRef, name, unmountFieldsStateRef) {
    const field = fieldsRef.current[name];
    if (field) {
        const { ref: { value }, ref, } = field;
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field.options).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field.options).value;
        }
        return value;
    }
    if (unmountFieldsStateRef) {
        return unmountFieldsStateRef.current[name];
    }
}

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

function baseGet(object, updatePath) {
    const path = updatePath.slice(0, -1);
    const length = path.length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef = undefined;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef = undefined;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (isArray(objectRef) &&
                        !objectRef.filter((data) => isObject(data) && !isEmptyObject(data))
                            .length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, unmountFieldsStateRef, shouldUnregister, forceDelete) {
    const { ref, ref: { name, type }, mutationWatcher, } = field;
    const fieldRef = fieldsRef.current[name];
    if (!shouldUnregister) {
        const value = getFieldValue(fieldsRef, name, unmountFieldsStateRef);
        if (!isUndefined(value)) {
            unmountFieldsStateRef.current[name] = value;
        }
    }
    if (!type) {
        delete fieldsRef.current[name];
        return;
    }
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldRef) {
        const { options } = fieldRef;
        if (isArray(options) && options.length) {
            unique(options).forEach((option, index) => {
                const { ref, mutationWatcher } = option;
                if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    if (mutationWatcher) {
                        mutationWatcher.disconnect();
                    }
                    unset(options, `[${index}]`);
                }
            });
            if (options && !unique(options).length) {
                delete fieldsRef.current[name];
            }
        }
        else {
            delete fieldsRef.current[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        if (mutationWatcher) {
            mutationWatcher.disconnect();
        }
        delete fieldsRef.current[name];
    }
}

var isString = (value) => typeof value === 'string';

var getFieldsValues = (fieldsRef, unmountFieldsStateRef, search) => {
    const output = {};
    for (const name in fieldsRef.current) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : isArray(search) && search.find((data) => name.startsWith(data)))) {
            output[name] = getFieldValue(fieldsRef, name);
        }
    }
    return Object.assign(Object.assign({}, transformToNestObject((unmountFieldsStateRef || {}).current || {})), transformToNestObject(output));
};

var isSameError = (error, { type, types = {}, message }) => isObject(error) &&
    error.type === type &&
    error.message === message &&
    Object.keys(error.types || {}).length === Object.keys(types).length &&
    Object.entries(error.types || {}).every(([key, value]) => types[key] === value);

function shouldRenderBasedOnError({ errors, name, error, validFields, fieldsWithValidation, }) {
    const isFieldValid = isEmptyObject(error);
    const isFormValid = isEmptyObject(errors);
    const currentFieldError = get(error, name);
    const existFieldError = get(errors, name);
    if (isFieldValid && validFields.has(name)) {
        return false;
    }
    if (isFormValid !== isFieldValid ||
        (!isFormValid && !existFieldError) ||
        (isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name))) {
        return true;
    }
    return currentFieldError && !isSameError(existFieldError, currentFieldError);
}

var isRegex = (value) => value instanceof RegExp;

const isValueMessage = (value) => isObject(value) && !isRegex(value);
var getValueAndMessage = (validationData) => isValueMessage(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var isFunction = (value) => typeof value === 'function';

var isBoolean = (value) => typeof value === 'boolean';

var isMessage = (value) => isString(value) || (isObject(value) && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(value));

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (validateAllFieldCriteria) {
        const error = errors[name];
        return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
    }
    return {};
};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value }, options, required, maxLength, minLength, min, max, pattern, validate, }, unmountFieldsStateRef) => {
    const fields = fieldsRef.current;
    const name = ref.name;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = value === '';
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value: requiredValue, message: requiredMessage } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (requiredValue) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox
                    ? (fields[name].options || [])[0].ref
                    : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
        let exceedMax;
        let exceedMin;
        const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
        const { value: minValue, message: minMessage } = getValueAndMessage(min);
        if (type === 'number' || (!type && !isNaN(value))) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
            }
            if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
            }
            if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
        const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
        const inputLength = value.toString().length;
        const exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
        const exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (pattern && !isEmpty) {
        const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fieldsRef, name, unmountFieldsStateRef);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

const getPath = (path, values) => {
    const getInnerPath = (value, key, isObject) => {
        const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return Object.entries(values)
        .map(([key, value]) => getInnerPath(value, key, isObject(values)))
        .flat(Infinity);
};

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value;
    watchFields.add(fieldName);
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else {
        value = get(fieldValues, fieldName);
        if (isObject(value) || isArray(value)) {
            getPath(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnBlur, isOnChange, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

function getIsFieldsDifferent(referenceArray, differenceArray) {
    if (!isArray(referenceArray) ||
        !isArray(differenceArray) ||
        referenceArray.length !== differenceArray.length) {
        return true;
    }
    for (let i = 0; i < referenceArray.length; i++) {
        const dataA = referenceArray[i];
        const dataB = differenceArray[i];
        if (isUndefined(dataB) ||
            Object.keys(dataA).length !== Object.keys(dataB).length) {
            return true;
        }
        for (const key in dataA) {
            if (dataA[key] !== dataB[key]) {
                return true;
            }
        }
    }
    return false;
}

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}[\\d+]`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(element, onDetachCallback) {
    const observer = new MutationObserver(() => {
        if (isDetached(element)) {
            observer.disconnect();
            onDetachCallback();
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

const isWindowUndefined = typeof window === UNDEFINED;
const isWeb = typeof document !== UNDEFINED &&
    !isWindowUndefined &&
    !isUndefined(window.HTMLElement);
const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
    const fieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const errorsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const touchedFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const dirtyFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const watchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const watchFieldsHookRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const watchFieldsHookRenderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldsWithValidationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const validFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const isValidRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    const defaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValues);
    const defaultValuesAtRenderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const isUnMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isWatchAllRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isSubmittedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isDirtyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const submitCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    const isSubmittingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const handleChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const unmountFieldsStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const resetFieldArrayFunctionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const contextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(context);
    const resolverRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(resolver);
    const fieldArrayNamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const [, render] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
    const modeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(mode));
    const { current: { isOnSubmit, isOnAll }, } = modeRef;
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const readFormStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        isSubmitted: isOnSubmit,
        submitCount: !isProxyEnabled,
        touched: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const { current: { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange }, } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(reValidateMode));
    contextRef.current = context;
    resolverRef.current = resolver;
    const reRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => !isUnMount.current && render({}), []);
    const shouldRenderBaseOnError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, error, shouldRender = false) => {
        let shouldReRender = shouldRender ||
            shouldRenderBasedOnError({
                errors: errorsRef.current,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        const previousError = get(errorsRef.current, name);
        if (isEmptyObject(error)) {
            if (fieldsWithValidationRef.current.has(name) || resolverRef.current) {
                validFieldsRef.current.add(name);
                shouldReRender = shouldReRender || previousError;
            }
            errorsRef.current = unset(errorsRef.current, name);
        }
        else {
            validFieldsRef.current.delete(name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !isSameError(previousError, error[name]);
            set(errorsRef.current, name, error[name]);
        }
        if (shouldReRender && !isNullOrUndefined(shouldRender)) {
            reRender();
            return true;
        }
    }, []);
    const setFieldValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({ ref, options }, rawValue) => {
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref) && !isString(value)) {
            ref.files = value;
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = value.includes(checkboxRef.value)))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, []);
    const setDirty = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name) => {
        const { isDirty, dirtyFields } = readFormStateRef.current;
        if (!fieldsRef.current[name] || (!isDirty && !dirtyFields)) {
            return false;
        }
        const isFieldDirty = defaultValuesAtRenderRef.current[name] !==
            getFieldValue(fieldsRef, name, unmountFieldsStateRef);
        const isDirtyFieldExist = get(dirtyFieldsRef.current, name);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const previousIsDirty = isDirtyRef.current;
        if (isFieldDirty) {
            set(dirtyFieldsRef.current, name, true);
        }
        else {
            unset(dirtyFieldsRef.current, name);
        }
        isDirtyRef.current =
            (isFieldArray &&
                getIsFieldsDifferent(get(getValues(), getFieldArrayParentName(name)), get(defaultValuesRef.current, getFieldArrayParentName(name)))) ||
                !isEmptyObject(dirtyFieldsRef.current);
        return ((isDirty && previousIsDirty !== isDirtyRef.current) ||
            (dirtyFields && isDirtyFieldExist !== get(dirtyFieldsRef.current, name)));
    }, []);
    const executeValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name, skipReRender) => {
        if (fieldsRef.current[name]) {
            const error = await validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], unmountFieldsStateRef);
            shouldRenderBaseOnError(name, error, skipReRender ? null : false);
            return isEmptyObject(error);
        }
        return false;
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (payload) => {
        const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
        const previousFormIsValid = isValidRef.current;
        isValidRef.current = isEmptyObject(errors);
        if (isArray(payload)) {
            const isInputsValid = payload
                .map((name) => {
                const error = get(errors, name);
                if (error) {
                    set(errorsRef.current, name, error);
                }
                else {
                    unset(errorsRef.current, name);
                }
                return !error;
            })
                .every(Boolean);
            reRender();
            return isInputsValid;
        }
        else {
            const error = get(errors, payload);
            shouldRenderBaseOnError(payload, (error ? { [payload]: error } : {}), previousFormIsValid !== isValidRef.current);
            return !error;
        }
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const trigger = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name) => {
        const fields = name || Object.keys(fieldsRef.current);
        if (resolverRef.current) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (isArray(fields)) {
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, true)));
            reRender();
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [executeSchemaOrResolverValidation, executeValidation]);
    const setInternalValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, { shouldDirty, shouldValidate }) => {
        getPath(name, value).forEach((fieldName) => {
            const data = {};
            const field = fieldsRef.current[fieldName];
            if (field) {
                set(data, name, value);
                setFieldValue(field, get(data, fieldName));
                if (shouldDirty) {
                    setDirty(fieldName);
                }
                if (shouldValidate) {
                    trigger(fieldName);
                }
            }
        });
    }, [trigger, setFieldValue, setDirty]);
    const setInternalValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, config) => {
        if (fieldsRef.current[name]) {
            setFieldValue(fieldsRef.current[name], value);
            return config.shouldDirty && setDirty(name);
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value, config);
        }
        if (!shouldUnregister) {
            unmountFieldsStateRef.current[name] = value;
        }
        return true;
    }, [setDirty, setFieldValue, setInternalValues]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const renderWatchedInputs = (name, found = true) => {
        if (!isEmptyObject(watchFieldsHookRef.current)) {
            for (const key in watchFieldsHookRef.current) {
                if (name === '' ||
                    watchFieldsHookRef.current[key].has(name) ||
                    watchFieldsHookRef.current[key].has(getFieldArrayParentName(name)) ||
                    !watchFieldsHookRef.current[key].size) {
                    watchFieldsHookRenderRef.current[key]();
                    found = false;
                }
            }
        }
        return found;
    };
    function setValue(name, value, config = {}) {
        const shouldRender = setInternalValue(name, value, config) ||
            isFieldWatched(name);
        renderWatchedInputs(name);
        if (shouldRender) {
            reRender();
        }
        if (config.shouldValidate) {
            trigger(name);
        }
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            const name = target.name;
            const field = fieldsRef.current[name];
            let error;
            if (field) {
                const isBlurEvent = type === EVENTS.BLUR;
                const shouldSkipValidation = !isOnAll &&
                    skipValidation(Object.assign({ isBlurEvent,
                        isReValidateOnChange,
                        isReValidateOnBlur, isSubmitted: isSubmittedRef.current }, modeRef.current));
                let shouldRender = setDirty(name) || isFieldWatched(name);
                if (isBlurEvent &&
                    !get(touchedFieldsRef.current, name) &&
                    readFormStateRef.current.touched) {
                    set(touchedFieldsRef.current, name, true);
                    shouldRender = true;
                }
                if (shouldSkipValidation) {
                    renderWatchedInputs(name);
                    return shouldRender && reRender();
                }
                if (resolver) {
                    const { errors } = await resolver(getValues(), contextRef.current, isValidateAllFieldCriteria);
                    const previousFormIsValid = isValidRef.current;
                    isValidRef.current = isEmptyObject(errors);
                    error = (get(errors, name)
                        ? { [name]: get(errors, name) }
                        : {});
                    if (previousFormIsValid !== isValidRef.current) {
                        shouldRender = true;
                    }
                }
                else {
                    error = await validateField(fieldsRef, isValidateAllFieldCriteria, field, unmountFieldsStateRef);
                }
                renderWatchedInputs(name);
                if (!shouldRenderBaseOnError(name, error) && shouldRender) {
                    reRender();
                }
            }
        };
    function getValues(payload) {
        if (isString(payload)) {
            return getFieldValue(fieldsRef, payload, unmountFieldsStateRef);
        }
        if (isArray(payload)) {
            return payload.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: getFieldValue(fieldsRef, name, unmountFieldsStateRef) })), {});
        }
        return getFieldsValues(fieldsRef, unmountFieldsStateRef);
    }
    const validateResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (values = {}) => {
        const { errors } = await resolverRef.current(Object.assign(Object.assign(Object.assign({}, defaultValuesRef.current), getValues()), values), contextRef.current, isValidateAllFieldCriteria);
        const previousFormIsValid = isValidRef.current;
        isValidRef.current = isEmptyObject(errors);
        if (previousFormIsValid !== isValidRef.current) {
            reRender();
        }
    }, [isValidateAllFieldCriteria]);
    const removeFieldEventListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, unmountFieldsStateRef, shouldUnregister, forceDelete), [shouldUnregister]);
    const removeFieldEventListenerAndRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (field &&
            (!isNameInFieldArray(fieldArrayNamesRef.current, field.ref.name) ||
                forceDelete)) {
            removeFieldEventListener(field, forceDelete);
            if (shouldUnregister) {
                [
                    errorsRef,
                    touchedFieldsRef,
                    dirtyFieldsRef,
                    defaultValuesAtRenderRef,
                ].forEach((data) => unset(data.current, field.ref.name));
                [fieldsWithValidationRef, validFieldsRef].forEach((data) => data.current.delete(field.ref.name));
                if (readFormStateRef.current.isValid ||
                    readFormStateRef.current.touched ||
                    readFormStateRef.current.isDirty) {
                    isDirtyRef.current = !isEmptyObject(dirtyFieldsRef.current);
                    reRender();
                    if (resolverRef.current) {
                        validateResolver();
                    }
                }
            }
        }
    }, [validateResolver, removeFieldEventListener]);
    function clearErrors(name) {
        if (name) {
            (isArray(name) ? name : [name]).forEach((inputName) => unset(errorsRef.current, inputName));
        }
        else {
            errorsRef.current = {};
        }
        reRender();
    }
    function setError(name, error) {
        isValidRef.current = false;
        set(errorsRef.current, name, Object.assign(Object.assign({}, error), { ref: (fieldsRef.current[name] || {}).ref }));
        reRender();
    }
    const watchInternal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((fieldNames, defaultValue, watchId) => {
        const watchFields = watchId
            ? watchFieldsHookRef.current[watchId]
            : watchFieldsRef.current;
        const combinedDefaultValues = isUndefined(defaultValue)
            ? defaultValuesRef.current
            : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef, unmountFieldsStateRef, fieldNames);
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(defaultValue)
                ? get(combinedDefaultValues, fieldNames)
                : defaultValue, true);
        }
        if (isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        if (isUndefined(watchId)) {
            isWatchAllRef.current = true;
        }
        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
            combinedDefaultValues);
    }, []);
    function watch(fieldNames, defaultValue) {
        return watchInternal(fieldNames, defaultValue);
    }
    function unregister(name) {
        (isArray(name) ? name : [name]).forEach((fieldName) => removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true));
    }
    function registerFieldRef(ref, validateOptions = {}) {
        if ( true && !ref.name) {
            // eslint-disable-next-line no-console
            return console.warn('Missing name @', ref);
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let isFieldArray;
        let defaultValue;
        if (field &&
            (isRadioOrCheckbox
                ? isArray(field.options) &&
                    unique(field.options).find((option) => {
                        return value === option.ref.value && option.ref === ref;
                    })
                : ref === field.ref)) {
            fields[name] = Object.assign(Object.assign({}, field), validateOptions);
            return;
        }
        if (type) {
            const mutationWatcher = onDomRemove(ref, () => removeFieldEventListenerAndRef(field));
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...unique((field && field.options) || []),
                        {
                            ref,
                            mutationWatcher,
                        },
                    ], ref: { type, name } }, validateOptions) : Object.assign(Object.assign({}, fieldRefAndValidationOptions), { mutationWatcher });
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        const isEmptyUnmountFields = isUndefined(get(unmountFieldsStateRef.current, name));
        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
            defaultValue = get(isEmptyUnmountFields
                ? defaultValuesRef.current
                : unmountFieldsStateRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(field, defaultValue);
            }
        }
        if (resolver && !isFieldArray && readFormStateRef.current.isValid) {
            validateResolver();
        }
        else if (!isEmptyObject(validateOptions)) {
            fieldsWithValidationRef.current.add(name);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, isValidateAllFieldCriteria, field, unmountFieldsStateRef).then((error) => {
                    const previousFormIsValid = isValidRef.current;
                    isEmptyObject(error)
                        ? validFieldsRef.current.add(name)
                        : (isValidRef.current = false);
                    if (previousFormIsValid !== isValidRef.current) {
                        reRender();
                    }
                });
            }
        }
        if (!defaultValuesAtRenderRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            const fieldValue = getFieldValue(fieldsRef, name, unmountFieldsStateRef);
            defaultValuesAtRenderRef.current[name] = isEmptyDefaultValue
                ? isObject(fieldValue)
                    ? Object.assign({}, fieldValue) : fieldValue
                : defaultValue;
        }
        if (type) {
            attachEventListeners(isRadioOrCheckbox && field.options
                ? field.options[field.options.length - 1]
                : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
        }
    }
    function register(refOrValidationOptions, rules) {
        if (!isWindowUndefined) {
            if (isString(refOrValidationOptions)) {
                registerFieldRef({ name: refOrValidationOptions }, rules);
            }
            else if (isObject(refOrValidationOptions) &&
                'name' in refOrValidationOptions) {
                registerFieldRef(refOrValidationOptions, rules);
            }
            else {
                return (ref) => ref && registerFieldRef(ref, refOrValidationOptions);
            }
        }
    }
    const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((callback) => async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        let fieldValues = getFieldsValues(fieldsRef, unmountFieldsStateRef);
        if (readFormStateRef.current.isSubmitting) {
            isSubmittingRef.current = true;
            reRender();
        }
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria);
                errorsRef.current = errors;
                fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fieldsRef.current)) {
                    if (field) {
                        const { ref: { name }, } = field;
                        const fieldError = await validateField(fieldsRef, isValidateAllFieldCriteria, field, unmountFieldsStateRef);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            validFieldsRef.current.delete(name);
                        }
                        else if (fieldsWithValidationRef.current.has(name)) {
                            unset(errorsRef.current, name);
                            validFieldsRef.current.add(name);
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors) &&
                Object.keys(errorsRef.current).every((name) => Object.keys(fieldsRef.current).includes(name))) {
                errorsRef.current = {};
                reRender();
                await callback(fieldValues, e);
            }
            else {
                errorsRef.current = Object.assign(Object.assign({}, errorsRef.current), fieldErrors);
                if (shouldFocusError) {
                    focusOnErrorField(fieldsRef.current, fieldErrors);
                }
            }
        }
        finally {
            isSubmittedRef.current = true;
            isSubmittingRef.current = false;
            submitCountRef.current = submitCountRef.current + 1;
            reRender();
        }
    }, [shouldFocusError, isValidateAllFieldCriteria]);
    const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        if (!errors) {
            errorsRef.current = {};
        }
        if (!touched) {
            touchedFieldsRef.current = {};
        }
        if (!isValid) {
            validFieldsRef.current = new Set();
            fieldsWithValidationRef.current = new Set();
            isValidRef.current = true;
        }
        if (!isDirty) {
            isDirtyRef.current = false;
        }
        if (!dirtyFields) {
            dirtyFieldsRef.current = {};
        }
        if (!isSubmitted) {
            isSubmittedRef.current = false;
        }
        if (!submitCount) {
            submitCountRef.current = 0;
        }
        defaultValuesAtRenderRef.current = {};
        fieldArrayDefaultValues.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        fieldsRef.current = {};
        if (values) {
            defaultValuesRef.current = values;
            renderWatchedInputs('');
        }
        unmountFieldsStateRef.current = shouldUnregister ? {} : values || {};
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        resetRefs(omitResetState);
        reRender();
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        isUnMount.current = false;
        return () => {
            isUnMount.current = true;
            fieldsRef.current &&
                "development" === 'production' &&
                Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
        };
    }, [removeFieldEventListenerAndRef]);
    if (!resolver) {
        isValidRef.current =
            validFieldsRef.current.size >= fieldsWithValidationRef.current.size &&
                isEmptyObject(errorsRef.current);
    }
    const formState = {
        dirtyFields: dirtyFieldsRef.current,
        isSubmitted: isSubmittedRef.current,
        submitCount: submitCountRef.current,
        touched: touchedFieldsRef.current,
        isDirty: isDirtyRef.current,
        isSubmitting: isSubmittingRef.current,
        isValid: isOnSubmit
            ? isSubmittedRef.current && isEmptyObject(errorsRef.current)
            : isValidRef.current,
    };
    const commonProps = {
        trigger,
        setValue: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setValue, [
            reRender,
            setInternalValue,
            trigger,
        ]),
        getValues: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getValues, []),
        register: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(register, [defaultValuesRef.current]),
        unregister: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(unregister, []),
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState,
    };
    const control = Object.assign(Object.assign({ removeFieldEventListener,
        renderWatchedInputs,
        watchInternal,
        reRender, mode: modeRef.current, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnChange,
        }, errorsRef,
        touchedFieldsRef,
        fieldsRef,
        isWatchAllRef,
        watchFieldsRef,
        resetFieldArrayFunctionRef,
        watchFieldsHookRef,
        watchFieldsHookRenderRef,
        fieldArrayDefaultValues,
        validFieldsRef,
        dirtyFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        isDirtyRef,
        isSubmittedRef,
        readFormStateRef,
        defaultValuesRef,
        unmountFieldsStateRef }, (resolver ? { validateSchemaIsValid: validateResolver } : {})), commonProps);
    return Object.assign({ watch,
        control,
        handleSubmit, reset: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(reset, []), clearErrors: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(clearErrors, []), setError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setError, []), errors: errorsRef.current }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormContext);
const FormProvider = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormContext.Provider, { value: Object.assign({}, props) }, children));
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

const removeAt = (data, index) => [
    ...data.slice(0, index),
    ...data.slice(index + 1),
];
function removeAtIndexes(data, index) {
    let k = -1;
    while (++k < data.length) {
        if (index.indexOf(k) >= 0) {
            delete data[k];
        }
    }
    return unique(data);
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : isArray(index)
        ? removeAtIndexes(data, index)
        : removeAt(data, index);

var moveArrayAt = (data, from, to) => {
    if (isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(isArray(value) ? value : [value || undefined]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(isArray(value) ? value : [value || undefined]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => isArray(value) ? Array(value.length).fill(undefined) : undefined;

function mapValueToBoolean(value) {
    if (isObject(value)) {
        const object = {};
        for (const key in value) {
            object[key] = true;
        }
        return [object];
    }
    return [true];
}
const filterBooleanArray = (value) => isArray(value)
    ? value.map(mapValueToBoolean).flat()
    : mapValueToBoolean(value);

const appendId = (value, keyName) => (Object.assign({ [keyName]: generateId() }, (isObject(value) ? value : { value })));
const mapIds = (data, keyName) => (isArray(data) ? data : []).map((value) => appendId(value, keyName));
const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    const focusIndexRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(-1);
    const { isWatchAllRef, resetFieldArrayFunctionRef, fieldArrayNamesRef, reRender, fieldsRef, defaultValuesRef, removeFieldEventListener, errorsRef, dirtyFieldsRef, isDirtyRef, touchedFieldsRef, readFormStateRef, watchFieldsRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValues, validateSchemaIsValid, renderWatchedInputs, getValues, } = control || methods.control;
    let shouldRender;
    const getDefaultValues = () => [
        ...get(fieldArrayDefaultValues.current[getFieldArrayParentName(name)]
            ? fieldArrayDefaultValues.current
            : defaultValuesRef.current, name, []),
    ];
    const memoizedDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(getDefaultValues());
    const [fields, setField] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(mapIds(memoizedDefaultValues.current, keyName));
    const [isDeleted, setIsDeleted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const allFields = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fields);
    const isNameKey = isKey(name);
    const getCurrentFieldsValues = () => get(getValues() || {}, name, allFields.current).map((item, index) => (Object.assign(Object.assign({}, allFields.current[index]), item)));
    allFields.current = fields;
    if (isNameKey) {
        fieldArrayDefaultValues.current[name] = memoizedDefaultValues.current;
    }
    const appendValueWithKey = (values) => values.map((value) => appendId(value, keyName));
    const setFieldAndValidState = (fieldsValues) => {
        setField(fieldsValues);
        if (readFormStateRef.current.isValid && validateSchemaIsValid) {
            validateSchemaIsValid({
                [name]: fieldsValues,
            });
        }
    };
    const shouldRenderFieldArray = (shouldRender) => {
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty ||
            readFormStateRef.current.isValid) {
            shouldRender = true;
        }
        renderWatchedInputs(name);
        shouldRender && !isWatchAllRef.current && reRender();
    };
    const resetFields = (flagOrFields) => {
        if (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) {
            isDirtyRef.current =
                isUndefined(flagOrFields) ||
                    getIsFieldsDifferent(flagOrFields.map((_a = {}) => {
                        var _b = keyName, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                        return rest;
                    }), get(defaultValuesRef.current, name, []));
        }
        for (const key in fieldsRef.current) {
            if (isMatchFieldArrayName(key, name) && fieldsRef.current[key]) {
                removeFieldEventListener(fieldsRef.current[key], true);
            }
        }
    };
    const append = (value, shouldFocus = true) => {
        shouldRender = false;
        setFieldAndValidState([
            ...allFields.current,
            ...(isArray(value)
                ? appendValueWithKey(value)
                : [appendId(value, keyName)]),
        ]);
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            dirtyFieldsRef.current[name] = [
                ...(dirtyFieldsRef.current[name] || fillEmptyArray(fields.slice(0, 1))),
                ...filterBooleanArray(value),
            ];
            isDirtyRef.current = true;
            shouldRender = true;
        }
        focusIndexRef.current = shouldFocus ? allFields.current.length : -1;
        shouldRenderFieldArray(shouldRender);
    };
    const prepend$1 = (value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        shouldRender = false;
        setFieldAndValidState(prepend(getCurrentFieldsValues(), isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        resetFields();
        if (isArray(get(errorsRef.current, name))) {
            errorsRef.current[name] = prepend(get(errorsRef.current, name), emptyArray);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = prepend(touchedFieldsRef.current[name], emptyArray);
            shouldRender = true;
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            dirtyFieldsRef.current[name] = prepend(dirtyFieldsRef.current[name] || [], filterBooleanArray(value));
            shouldRender = true;
        }
        shouldRenderFieldArray(shouldRender);
        focusIndexRef.current = shouldFocus ? 0 : -1;
    };
    const remove = (index) => {
        shouldRender = false;
        const fieldValues = getCurrentFieldsValues();
        setFieldAndValidState(removeArrayAt(fieldValues, index));
        resetFields(removeArrayAt(fieldValues, index));
        setIsDeleted(true);
        if (isArray(get(errorsRef.current, name))) {
            set(errorsRef.current, name, removeArrayAt(get(errorsRef.current, name), index));
            if (!unique(get(errorsRef.current, name, [])).length) {
                unset(errorsRef.current, name);
            }
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = removeArrayAt(touchedFieldsRef.current[name], index);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            dirtyFieldsRef.current[name] = removeArrayAt(dirtyFieldsRef.current[name], index);
            if (!dirtyFieldsRef.current[name].length) {
                delete dirtyFieldsRef.current[name];
            }
            shouldRender = true;
        }
        if (readFormStateRef.current.isValid && !validateSchemaIsValid) {
            let fieldIndex = -1;
            let isFound = false;
            const isIndexUndefined = isUndefined(index);
            while (fieldIndex++ < fields.length) {
                const isLast = fieldIndex === fields.length - 1;
                const isCurrentIndex = (isArray(index) ? index : [index]).indexOf(fieldIndex) >= 0;
                if (isCurrentIndex || isIndexUndefined) {
                    isFound = true;
                }
                if (!isFound) {
                    continue;
                }
                for (const key in fields[fieldIndex]) {
                    const currentFieldName = `${name}[${fieldIndex}].${key}`;
                    if (isCurrentIndex || isLast || isIndexUndefined) {
                        validFieldsRef.current.delete(currentFieldName);
                        fieldsWithValidationRef.current.delete(currentFieldName);
                    }
                    else {
                        const previousFieldName = `${name}[${fieldIndex - 1}].${key}`;
                        if (validFieldsRef.current.has(currentFieldName)) {
                            validFieldsRef.current.add(previousFieldName);
                        }
                        if (fieldsWithValidationRef.current.has(currentFieldName)) {
                            fieldsWithValidationRef.current.add(previousFieldName);
                        }
                    }
                }
            }
        }
        shouldRenderFieldArray(shouldRender);
    };
    const insert$1 = (index, value, shouldFocus = true) => {
        shouldRender = false;
        const emptyArray = fillEmptyArray(value);
        const fieldValues = getCurrentFieldsValues();
        setFieldAndValidState(insert(fieldValues, index, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        resetFields(insert(fieldValues, index));
        if (isArray(get(errorsRef.current, name))) {
            errorsRef.current[name] = insert(get(errorsRef.current, name), index, emptyArray);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = insert(touchedFieldsRef.current[name], index, emptyArray);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            dirtyFieldsRef.current[name] = insert(dirtyFieldsRef.current[name], index, filterBooleanArray(value));
            shouldRender = true;
        }
        shouldRenderFieldArray(shouldRender);
        focusIndexRef.current = shouldFocus ? index : -1;
    };
    const swap = (indexA, indexB) => {
        shouldRender = false;
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields(fieldValues);
        setFieldAndValidState([...fieldValues]);
        if (isArray(get(errorsRef.current, name))) {
            swapArrayAt(get(errorsRef.current, name), indexA, indexB);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            swapArrayAt(touchedFieldsRef.current[name], indexA, indexB);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            swapArrayAt(dirtyFieldsRef.current[name], indexA, indexB);
            shouldRender = true;
        }
        shouldRenderFieldArray(shouldRender);
    };
    const move = (from, to) => {
        shouldRender = false;
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        resetFields(fieldValues);
        setFieldAndValidState([...fieldValues]);
        if (isArray(get(errorsRef.current, name))) {
            moveArrayAt(get(errorsRef.current, name), from, to);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            moveArrayAt(touchedFieldsRef.current[name], from, to);
            shouldRender = true;
        }
        if ((readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) &&
            dirtyFieldsRef.current[name]) {
            moveArrayAt(dirtyFieldsRef.current[name], from, to);
            shouldRender = true;
        }
        shouldRenderFieldArray(shouldRender);
    };
    const reset = () => {
        resetFields();
        memoizedDefaultValues.current = getDefaultValues();
        setField(mapIds(memoizedDefaultValues.current, keyName));
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (isNameKey &&
            isDeleted &&
            fieldArrayDefaultValues.current[name] &&
            fields.length < fieldArrayDefaultValues.current[name].length) {
            fieldArrayDefaultValues.current[name].pop();
        }
        if (isWatchAllRef.current) {
            reRender();
        }
        else if (watchFieldsRef) {
            let shouldRenderUseWatch = true;
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    reRender();
                    shouldRenderUseWatch = false;
                    break;
                }
            }
            shouldRenderUseWatch && renderWatchedInputs(name);
        }
        if (focusIndexRef.current > -1) {
            for (const key in fieldsRef.current) {
                const field = fieldsRef.current[key];
                if (key.startsWith(`${name}[${focusIndexRef.current}]`) &&
                    field.ref.focus) {
                    field.ref.focus();
                    break;
                }
            }
        }
        focusIndexRef.current = -1;
    }, [
        fields,
        name,
        fieldArrayDefaultValues,
        isDeleted,
        isNameKey,
        reRender,
        fieldsRef,
        watchFieldsRef,
        isWatchAllRef,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        fieldArrayNames.add(name);
        resetFunctions[name] = reset;
        return () => {
            resetFields();
            delete resetFunctions[name];
            fieldArrayNames.delete(name);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        swap: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(swap, [name]),
        move: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(move, [name]),
        prepend: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(prepend$1, [name]),
        append: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(append, [name]),
        remove: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(remove, [fields, name]),
        insert: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(insert$1, [name]),
        fields,
    };
};

function useWatch({ control, name, defaultValue, }) {
    const methods = useFormContext();
    const { watchFieldsHookRef, watchFieldsHookRenderRef, watchInternal, defaultValuesRef, } = control || methods.control;
    const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isUndefined(defaultValue)
        ? isString(name)
            ? get(defaultValuesRef.current, name)
            : isArray(name)
                ? name.reduce((previous, inputName) => (Object.assign(Object.assign({}, previous), { [inputName]: get(defaultValuesRef.current, inputName) })), {})
                : defaultValuesRef.current
        : defaultValue);
    const idRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const defaultValueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValue);
    const nameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(name);
    const updateWatchValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue(watchInternal(nameRef.current, defaultValueRef.current, idRef.current)), [setValue, watchInternal, defaultValueRef, nameRef, idRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const id = (idRef.current = generateId());
        const watchFieldsHookRender = watchFieldsHookRenderRef.current;
        const watchFieldsHook = watchFieldsHookRef.current;
        watchFieldsHook[id] = new Set();
        watchFieldsHookRender[id] = updateWatchValue;
        watchInternal(nameRef.current, defaultValueRef.current, id);
        return () => {
            delete watchFieldsHook[id];
            delete watchFieldsHookRender[id];
        };
    }, [
        nameRef,
        updateWatchValue,
        watchFieldsHookRenderRef,
        watchFieldsHookRef,
        watchInternal,
        defaultValueRef,
    ]);
    return (isUndefined(value) ? defaultValue : value);
}

var getInputValue = (event) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

const Controller = (_a) => {
    var { name, rules, as, render, defaultValue, control, onFocus } = _a, rest = __rest(_a, ["name", "rules", "as", "render", "defaultValue", "control", "onFocus"]);
    const methods = useFormContext();
    const { defaultValuesRef, setValue, register, unregister, trigger, mode, reValidateMode: { isReValidateOnBlur, isReValidateOnChange }, isSubmittedRef, touchedFieldsRef, readFormStateRef, reRender, fieldsRef, fieldArrayNamesRef, unmountFieldsStateRef, } = control || methods.control;
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    const getInitialValue = () => !isUndefined(get(unmountFieldsStateRef.current, name)) && isNotFieldArray
        ? unmountFieldsStateRef.current[name]
        : isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue;
    const [value, setInputStateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getInitialValue());
    const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    const onFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onFocus);
    const isSubmitted = isSubmittedRef.current;
    const shouldValidate = (isBlurEvent) => !skipValidation(Object.assign({ isBlurEvent,
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted }, mode));
    const commonTask = ([event]) => {
        const data = getInputValue(event);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    };
    const registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (fieldsRef.current[name]) {
            fieldsRef.current[name] = Object.assign({ ref: fieldsRef.current[name].ref }, rules);
        }
        else {
            register(Object.defineProperty({ name, focus: onFocusRef.current }, VALUE, {
                set(data) {
                    setInputStateValue(data);
                    valueRef.current = data;
                },
                get() {
                    return valueRef.current;
                },
            }), rules);
        }
    }, [fieldsRef, rules, name, onFocusRef, register]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        !isNameInFieldArray(fieldArrayNamesRef.current, name) && unregister(name);
    }, [unregister, name, fieldArrayNamesRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        registerField();
    }, [registerField]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (!fieldsRef.current[name]) {
            registerField();
            if (isNotFieldArray) {
                setInputStateValue(getInitialValue());
            }
        }
    });
    const onBlur = () => {
        if (readFormStateRef.current.touched &&
            !get(touchedFieldsRef.current, name)) {
            set(touchedFieldsRef.current, name, true);
            reRender();
        }
        if (shouldValidate(true)) {
            trigger(name);
        }
    };
    const onChange = (...event) => setValue(name, commonTask(event), {
        shouldValidate: shouldValidate(),
        shouldDirty: true,
    });
    const props = Object.assign(Object.assign({}, rest), { onChange,
        onBlur,
        name,
        value });
    return as
        ? Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(as)
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(as, props)
            : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(as, props)
        : render
            ? render({
                onChange,
                onBlur,
                value,
            })
            : null;
};


//# sourceMappingURL=index.esm.js.map


/***/ })

}]);