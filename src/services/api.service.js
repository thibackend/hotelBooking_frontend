import { instance } from './instance.service';
import tokenService from './token.service';
const handleError = error => {
  if (error.response) {
    const { data } = error.response || {};
    return data;
  }
  return error;
};

const preprocessResponse = result => {
  const { message, data } = result || {};
  if (message === 'success') {
    return data;
  }
  return result;
};

export class ApiService {
  static getHeader() {
    const token = tokenService.getToken() || undefined;
    if (!token) return {};
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Bearer-token": `Bearer ${token.accessToken}`,
    };
  }
  static async get(url, params, getAll) {
    const header = this.getHeader();
    return instance
      .get(url, {
        headers: header,
        params,
      })
      .then(data => {
        if (getAll) return data;
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        throw handleError(e);
      });
  }

  static async post(url, data, headers) {
   
    return instance({
      method: 'post',
      url,
      headers: this.getHeader(),
      data,
      headers,
    })
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        throw handleError(e);
      });
  }

  static async put(apiUrl, data) {
    return instance({
      method: 'put',
      url: apiUrl,
      headers: this.getHeader(),
      data,
    })
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        throw handleError(e);
      });
  }
  static async patch(apiUrl, data) {
    return instance({
      method: 'PATCH',
      url: apiUrl,
      data,
    })
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        throw handleError(e);
      });
  }

  // static uploadFile = async (url, data) => {
  //   const formData = new FormData();
  //   formData.append("file", {
  //     uri: data.path,
  //     type: "image/jpeg",
  //     name: `${new Date().getTime()}.png`,
  //   });
  //   return instance({
  //     method: "post",
  //     url: url,
  //     headers: this.getHeaderUploadFile(),
  //     data: formData,
  //   })
  //     .then(res => {
  //       console.log(res);
  //       return res.data;
  //     })
  //     .then(data => {
  //       return preprocessResponse(data);
  //     })
  //     .catch(error => {
  //       throw handleError(error);
  //     });
  // };

  static async delete(apiUrl, data) {
    return instance({
      method: 'delete',
      url: apiUrl,
      headers: this.getHeader(),
      data,
    })
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        throw handleError(e);
      });
  }
}
